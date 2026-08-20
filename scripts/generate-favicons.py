#!/usr/bin/env python3
"""Generate the site's favicon set from the full logo.

The full logo is a mark above three lines of text. Text is illegible at favicon
sizes, so this isolates the mark, pads it onto a square, and writes every size
the browsers, iOS, and the web manifest ask for.

    python3 scripts/generate-favicons.py

Regenerate whenever public/myfence-logo.png changes.
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "myfence-logo.png"

# The mark is padded out to this fraction of its own longest edge so it does not
# collide with the edge of the square once browsers round the corners.
PADDING_RATIO = 1.05

OUTPUTS = {
    ROOT / "src" / "app" / "icon.png": 512,
    ROOT / "src" / "app" / "apple-icon.png": 180,
    ROOT / "public" / "icon-192.png": 192,
    ROOT / "public" / "icon-512.png": 512,
}

# Sizes packed into the multi-resolution .ico. 48 is the size Google's favicon
# crawler looks for.
ICO_PATH = ROOT / "src" / "app" / "favicon.ico"
ICO_SIZES = [(16, 16), (32, 32), (48, 48)]


def is_background(pixel, background, tolerance=18):
    return all(abs(a - b) <= tolerance for a, b in zip(pixel, background))


def find_mark_box(image):
    """Bounding box of the topmost content band, which is the mark itself.

    Rows of pure background separate the mark from the text beneath it, so the
    first band of non-background rows is the mark and everything after it is type.
    """
    width, height = image.size
    pixels = image.load()
    background = pixels[2, 2]

    def row_has_content(y):
        return any(
            not is_background(pixels[x, y], background) for x in range(0, width, 2)
        )

    top = next(y for y in range(height) if row_has_content(y))
    bottom = top
    for y in range(top, height):
        if row_has_content(y):
            bottom = y
        else:
            break

    columns = [
        x
        for x in range(width)
        if any(
            not is_background(pixels[x, y], background)
            for y in range(top, bottom + 1, 2)
        )
    ]

    return (min(columns), top, max(columns) + 1, bottom + 1), background


def build_square(image):
    (left, top, right, bottom), background = find_mark_box(image)
    mark = image.crop((left, top, right, bottom))

    side = int(max(mark.width, mark.height) * PADDING_RATIO)
    canvas = Image.new("RGB", (side, side), background)
    canvas.paste(mark, ((side - mark.width) // 2, (side - mark.height) // 2))

    print(
        f"mark {mark.width}x{mark.height} at ({left},{top}) "
        f"-> {side}x{side} square on rgb{background}"
    )
    return canvas


def main():
    square = build_square(Image.open(SOURCE).convert("RGB"))

    for path, size in OUTPUTS.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        resized = square.resize((size, size), Image.LANCZOS)
        # Flat illustration, so a palette costs nothing visually and roughly
        # halves the file.
        palette = resized.quantize(colors=128, method=Image.MEDIANCUT, dither=Image.NONE)
        palette.save(path, "PNG", optimize=True)
        print(f"  {path.relative_to(ROOT)}  {size}x{size}  {path.stat().st_size / 1024:.1f} KB")

    # Next's image pipeline rejects an .ico whose embedded PNGs are not RGBA.
    ico = square.resize((48, 48), Image.LANCZOS).convert("RGBA")
    ico.save(ICO_PATH, "ICO", sizes=ICO_SIZES)
    print(
        f"  {ICO_PATH.relative_to(ROOT)}  "
        f"{','.join(f'{w}x{h}' for w, h in ICO_SIZES)}  "
        f"{ICO_PATH.stat().st_size / 1024:.1f} KB"
    )


if __name__ == "__main__":
    main()
