# MDX Blog Post Guide (Studio Authors)

Blog posts published from MyFence Studio to `src/content/blog/*.mdx` use the same layout and formatting as legacy posts. The Gemini AI is configured to generate content using these components and patterns.

## Frontmatter

```yaml
---
title: "Your Post Title"
description: "A short intro paragraph shown below the title."
slug: "url-friendly-slug"
category: "Installation"          # Installation, Maintenance, Pricing, Materials, Legal, etc.
image: "/path/to/hero.jpg"       # Hero/featured image
readTime: "10 min read"
publishDate: "February 2026"
layout: "centered"               # "centered" ( Steel style) or "two-column" (default, Onsite style)
showArticleSummary: true         # Enables AI Summary CTA for longer posts
imageCaption: "Image courtesy of Vendor Name"  # Optional caption below hero
---
```

- **layout**: `centered` = Steel vs Wood style (metadata above title, hero below, Article Summary box). `two-column` = Onsite style (title + hero side-by-side).
- **showArticleSummary**: Set to `true` for posts 1000+ words to show the "Generate AI Summary" CTA.
- **imageCaption**: Shown below the hero image (e.g. "Image courtesy of Barrier Boss USA").

## Callout Boxes

```mdx
<Callout title="Real-world failure">
  The photos above show peeling film and blackened boards.
</Callout>
```

Variants: `warning` (default), `success`, `info`

```mdx
<Callout title="Pro tip" variant="success">Getting it right saves money.</Callout>
```

## Comparison Tables

Use markdown tables—they render in a polished Card:

```md
| Feature | Steel Posts | Wood Posts |
|---------|-------------|------------|
| Cost | $225/post | $45/post |
| Warranty | 40 Years | None |
```

## Images

```md
![Alt text](/path/to/image.jpg)
```

For side-by-side images, use **ImageGrid**:

```mdx
<ImageGrid columns={2}>
  ![Image 1](/path1.jpg)
  ![Image 2](/path2.jpg)
</ImageGrid>
```

## Image Captions

```mdx
<ImageCaption>
  Image courtesy of <a href="https://example.com">Vendor Name</a>
</ImageCaption>
```

## Formatting

- **Bold** key terms and phrases within paragraphs for emphasis
- Use `##` for main sections, `###` for sub-sections
- Numbered lists for steps; bullet lists for options
