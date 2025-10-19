# MDX Article Debugging Guide

## Common Error: `TypeError: e.jsxDEV is not a function`

### Root Cause
This error occurs due to a JSX runtime configuration mismatch in the Vite + MDX setup.

### The Problem
1. **tsconfig.app.json** has `"jsx": "react-jsx"` (new JSX transform)
2. **Vite config** has `jsxImportSource: 'react'` in the MDX plugin
3. **MDX files** were importing React explicitly with `import React from 'react'`

### Why It Fails
When using the new JSX transform (`react-jsx`), you shouldn't need to import React in every file. However, MDX files are processed differently and this creates a conflict between:
- The automatic JSX runtime (no React import needed)
- The explicit React imports in MDX files

### The Solution
**Remove explicit React imports from MDX files** when using the new JSX transform. The automatic runtime handles JSX transformation without requiring `import React from 'react'`.

### Configuration Requirements
```javascript
// vite.config.ts
mdx({ 
  jsxImportSource: 'react',
  remarkPlugins: [remarkGfm],
  development: mode !== 'production'
})
```

```json
// tsconfig.app.json
{
  "compilerOptions": {
    "jsx": "react-jsx"  // New JSX transform
  }
}
```

### Best Practices for TSX to MDX Conversion
1. **Do NOT** add `import React from 'react'` to MDX files
2. Ensure `development: mode !== 'production'` is set in MDX plugin
3. Wrap MDX content in ErrorBoundary components in the wrapper files
4. Use proper type definitions in `src/mdx.d.ts`
5. Set `jsxImportSource: 'react'` in MDX config

### Checklist When Converting TSX Articles to MDX
- [ ] Remove any explicit React imports from MDX files
- [ ] Verify `jsxImportSource: 'react'` in vite.config.ts
- [ ] Confirm `development: mode !== 'production'` is set
- [ ] Confirm ErrorBoundary wrapper exists in corresponding MDX.tsx file
- [ ] Test in both development and production builds
- [ ] Check console for any JSX runtime errors
