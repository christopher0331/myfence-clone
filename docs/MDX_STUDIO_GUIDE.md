# MDX Blog Post Guide (Studio Authors)

Blog posts published from MyFence Studio to `src/content/blog/*.mdx` use the same layout and formatting as legacy posts. Use this guide when writing in Studio.

## Frontmatter

Include this at the top of your MDX:

```yaml
---
title: "Your Post Title"
description: "A short intro paragraph shown below the title."
slug: "url-friendly-slug"
category: "Installation"          # Shown as a tag (e.g. Installation, Maintenance, Pricing)
image: "/path/to/hero.jpg"       # Or featured_image - hero image beside title
readTime: "10 min read"
publishDate: "February 2026"
---
```

- **image** or **featured_image**: URL or path to the hero image displayed beside the title. Leave empty for no hero image.

## Callout Boxes

Use callouts to highlight important information (like "Real-world failure"):

```mdx
<Callout title="Real-world failure">
  The photos above show peeling film and blackened boards—classic signs of stain applied before panels were dry.
</Callout>
```

Variants: `warning` (default), `success`, `info`

```mdx
<Callout title="Pro tip" variant="success">
  Getting it right the first time saves money.
</Callout>
```

## Images

Standard markdown images are styled automatically:

```md
![Alt text describing the image](/path/to/image.jpg)
```

## Formatting

- Use `## Heading` for main sections, `###` for sub-sections
- **Bold** and *italic* work as usual
- Numbered and bullet lists render with proper spacing
- Links are styled with the primary color
