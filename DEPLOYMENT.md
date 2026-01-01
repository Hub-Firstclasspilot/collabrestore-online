# Static Build Deployment Guide

## Generating a Static Build

To generate a static build for shared hosting, run:

```bash
npm run generate
```

This command will:
1. Build your Nuxt application
2. Generate static HTML files
3. Create a `.output/public` directory with all static files

## What Gets Generated

After running `npm run generate`, you'll find your static files in:
```
.output/public/
```

This directory contains:
- `index.html` - Your main page
- `connect/` - Your connect page
- `_nuxt/` - All JavaScript, CSS, and other assets

## Deployment Steps

1. **Build the static site:**
   ```bash
   npm run generate
   ```

2. **Upload to your hosting:**
   - Upload **all contents** of the `.output/public` directory
   - Upload to your web root directory (usually `public_html`, `www`, or `htdocs`)

3. **File Structure on Server:**
   ```
   public_html/
   ├── index.html
   ├── connect/
   │   └── index.html
   ├── _nuxt/
   │   ├── (all JS, CSS, and asset files)
   └── ...
   ```

4. **Important Notes:**
   - Make sure your hosting supports static files (HTML, CSS, JS)
   - No Node.js server is required for static hosting
   - All routes will work as static HTML files
   - If you have a custom domain, point it to your hosting's web root

## Testing Locally

Before deploying, you can test the static build locally:

```bash
npm run preview
```

This will serve the static files from `.output/public` so you can verify everything works correctly.

## Troubleshooting

- **404 errors on routes:** Make sure you uploaded the entire `.output/public` directory, not just the contents
- **Assets not loading:** Check that the `_nuxt` directory was uploaded correctly
- **Styling issues:** Ensure Tailwind CSS was properly compiled (should be in `_nuxt` directory)

