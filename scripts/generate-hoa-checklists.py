#!/usr/bin/env python3
"""Generate MyFence.com HOA fence submission checklist PDFs.

These are homeowner prep guides, not official association forms.
Run: python3 scripts/generate-hoa-checklists.py
"""

from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "docs" / "hoa"

CHECKLISTS = [
    {
        "filename": "canterwood-hoa-fence-submission-checklist.pdf",
        "title": "Canterwood HOA Fence Submission Checklist",
        "lines": [
            "MyFence.com homeowner prep guide (not an official association form)",
            "",
            "Before submitting to the Canterwood Architectural Control Committee:",
            "1. Confirm you are working with the residential HOA ACC, not the golf club.",
            "2. Chain-link is not accepted, including for pet runs - plan cedar or hybrid.",
            "3. Review current Residential Guidelines (ACC documents are updated periodically).",
            "4. Prepare a site plan with lot lines, house, gates, and proposed fence location.",
            "5. Include style drawings, heights, materials, colors, and stain samples.",
            "6. Note golf-course or wooded sightlines that affect placement and height.",
            "7. Request the current ACC application from the Canterwood HOA office / manager.",
            "   HOA Community Solutions / (253) 985-3812",
            "8. Do not start construction until you have written ACC approval.",
            "9. Keep photos and approval docs for closeout and resale.",
            "",
            "MyFence.com prepares Canterwood ACC packages at no extra fee.",
            "Call (253) 455-1885 or visit myfence.com/quote",
        ],
    },
    {
        "filename": "somerset-hoa-fence-submission-checklist.pdf",
        "title": "Somerset CRC Fence Submission Checklist",
        "lines": [
            "MyFence.com homeowner prep guide (not an official association form)",
            "",
            "Before submitting to the Somerset Covenants Review Committee (CRC):",
            "1. Confirm your division's CC&Rs apply (most lots do; a few do not).",
            "2. CRC review is separate from any City of Bellevue permit.",
            "3. Somerset is a view community - document view impact on neighboring lots.",
            "4. Use Form B (minor remodel) for typical fence work unless CRC directs Form A.",
            "5. Prepare a site plan with lot lines, house, slope, and proposed fence location.",
            "6. Include elevations, heights, materials, and finish samples.",
            "7. Download current forms and Fence Guidelines at somerset98006.org.",
            "8. Email the packet to crc@somerset98006.org. Do not start until written approval.",
            "9. Keep photos and approval docs for closeout and resale.",
            "",
            "MyFence.com prepares Somerset CRC packages at no extra fee.",
            "Call (253) 455-1885 or visit myfence.com/quote",
        ],
    },
    {
        "filename": "highlands-at-cedar-downs-hoa-fence-submission-checklist.pdf",
        "title": "Highlands at Cedar Downs HOA Fence Checklist",
        "lines": [
            "MyFence.com homeowner prep guide (not an official association form)",
            "",
            "Before submitting to Highlands at Cedar Downs HOA architectural review:",
            "1. Confirm you are in Highlands at Cedar Downs, not the older Cedar Downs HOA.",
            "2. Request the current architectural application from association management.",
            "   J&M Management / (253) 848-1947 / information@jandmmanagement.com",
            "3. Prepare a site plan with lot lines, house, and proposed fence location.",
            "4. Include style drawings, heights, materials, and stain/color samples.",
            "5. Note gentle hillside grades and any new landscaping or irrigation to protect.",
            "6. Align style and color with the community's newer-home streetscape.",
            "7. Do not start construction until you have written HOA approval.",
            "8. Keep photos and approval docs for closeout and resale.",
            "",
            "MyFence.com prepares Highlands at Cedar Downs packages at no extra fee.",
            "Call (253) 455-1885 or visit myfence.com/quote",
        ],
    },
    {
        "filename": "elk-run-hoa-fence-submission-checklist.pdf",
        "title": "Elk Run HOA Fence Submission Checklist",
        "lines": [
            "MyFence.com homeowner prep guide (not an official association form)",
            "",
            "Before submitting to your Elk Run division board:",
            "1. Identify your division. Elk Run has five separate HOAs with different CC&Rs.",
            "   Divisions 3 & 5: SE 277th Pl, SE 279th St, 226th Ct SE, 227th Ct SE.",
            "   Resources: elkrunhoa3and5.com (Div. 3 & 5 only).",
            "2. Request the current CC&Rs and any architectural form from your division.",
            "3. Confirm height, materials, street setbacks, and whether formal review is required.",
            "4. Prepare a site plan with lot lines, house, and proposed fence location.",
            "5. Include style drawings (picture-frame cedar is commonly accepted).",
            "6. Note former golf-course / greenbelt edges if your rear yard backs open space.",
            "7. Do not start construction until you have the written approval your division requires.",
            "8. Keep photos and approval docs for closeout and resale.",
            "",
            "MyFence.com prepares Elk Run division packages at no extra fee.",
            "Call (253) 455-1885 or visit myfence.com/quote",
        ],
    },
    {
        "filename": "ten-trails-hoa-fence-submission-checklist.pdf",
        "title": "Ten Trails HOA Fence Submission Checklist",
        "lines": [
            "MyFence.com homeowner prep guide (not an official association form)",
            "",
            "Before submitting to Ten Trails architectural review:",
            "1. Confirm your village / builder phase - standards can vary by section.",
            "2. Request the current ARC application from Ten Trails HOA management.",
            "   hoa@tentrails.com / tentrails.com / (360) 469-4043",
            "3. Review CC&Rs for allowed styles, colors, and materials (often stricter than city code).",
            "4. Prepare a site plan with lot lines, house, trails, and proposed fence location.",
            "5. Include elevations, heights, materials, and finish samples.",
            "6. Plan for foothills wind: hybrid cedar/aluminum is commonly a strong fit.",
            "7. File with the ARC and the City of Black Diamond if a permit is also required.",
            "8. Do not start construction until you have written ARC approval.",
            "9. Keep photos and approval docs for closeout and resale.",
            "",
            "MyFence.com prepares Ten Trails ARC packages at no extra fee.",
            "Call (253) 455-1885 or visit myfence.com/quote",
        ],
    },
    {
        "filename": "falling-water-hoa-fence-submission-checklist.pdf",
        "title": "Falling Water HOA Fence Submission Checklist",
        "lines": [
            "MyFence.com homeowner prep guide (not an official association form)",
            "",
            "Before submitting to the Falling Water Architectural Control Committee:",
            "1. Confirm your phase/section - design rules can differ across the neighborhood.",
            "2. Request the current ACC application from association management.",
            "3. Prepare complete plans, specs, and a site plan showing location on the lot.",
            "4. Submit at least 30 days before the intended start date when the CC&Rs require it.",
            "5. Include heights, materials, finish, gates, and how the fence follows slope/drainage.",
            "6. Check City of Bonney Lake height and street-frontage rules in addition to ACC review.",
            "7. Do not start construction until you have written ACC approval.",
            "8. Keep photos and approval docs for closeout and resale.",
            "",
            "MyFence.com prepares Falling Water ACC packages at no extra fee.",
            "Call (253) 455-1885 or visit myfence.com/quote",
        ],
    },
]


def escape(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def make_pdf(title: str, lines: list[str]) -> bytes:
    # Simple one-page Helvetica PDF. Keep under ~80 chars per line.
    content_ops = [
        "BT",
        "/F1 16 Tf",
        "50 760 Td",
        f"({escape(title)}) Tj",
        "/F1 10 Tf",
        "0 -28 Td",
    ]
    first = True
    for line in lines:
        if not first:
            content_ops.append("0 -14 Td")
        first = False
        if line:
            content_ops.append(f"({escape(line)}) Tj")
        else:
            content_ops.append("() Tj")
    content_ops.append("ET")
    stream = "\n".join(content_ops).encode("latin-1", errors="replace")

    objects = [
        b"1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n",
        b"2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n",
        b"3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
        b"/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj\n",
        b"4 0 obj << /Length " + str(len(stream)).encode() + b" >> stream\n" + stream + b"\nendstream endobj\n",
        b"5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n",
    ]

    header = b"%PDF-1.4\n"
    body = b""
    offsets = [0]
    pos = len(header)
    for obj in objects:
        offsets.append(pos)
        body += obj
        pos += len(obj)

    xref_start = pos
    xref = b"xref\n0 6\n0000000000 65535 f \n"
    for off in offsets[1:]:
        xref += f"{off:010d} 00000 n \n".encode()
    trailer = (
        b"trailer << /Size 6 /Root 1 0 R >>\nstartxref\n"
        + str(xref_start).encode()
        + b"\n%%EOF\n"
    )
    return header + body + xref + trailer


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for item in CHECKLISTS:
        path = OUT / item["filename"]
        path.write_bytes(make_pdf(item["title"], item["lines"]))
        print(f"{path.name:64s} {path.stat().st_size:5d} B")


if __name__ == "__main__":
    main()
