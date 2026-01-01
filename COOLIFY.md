# Coolify Deployment Guide

## Quick Setup

1. **Push your code to a Git repository** (GitHub, GitLab, etc.)

2. **In Coolify:**
   - Create a new resource
   - Select "Docker Compose" or "Dockerfile" option
   - Connect your Git repository
   - Coolify will automatically detect the Dockerfile

3. **Configuration:**
   - **Port:** `3000` (default, Coolify will handle port mapping)
   - **Build Command:** Not needed (Dockerfile handles it)
   - **Start Command:** Not needed (Dockerfile handles it)

## Environment Variables (Optional)

If you need environment variables, add them in Coolify's environment section:
- `NODE_ENV=production` (already set in Dockerfile)
- `PORT=3000` (already set in Dockerfile)
- `HOST=0.0.0.0` (already set in Dockerfile)

## Dockerfile Details

The Dockerfile uses a multi-stage build:
- **Builder stage:** Installs dependencies and builds the application
- **Runner stage:** Creates a minimal production image with only the built files

This results in a smaller, more secure production image.

## Troubleshooting

- **Build fails:** Check that all dependencies are in `package.json`
- **Application won't start:** Verify the port is set to `3000` in Coolify
- **Assets not loading:** Ensure the build completed successfully

## Local Testing

Test the Docker build locally before deploying:

```bash
# Build the image
docker build -t collabwallets .

# Run the container
docker run -p 3000:3000 collabwallets
```

Then visit `http://localhost:3000` to test.

