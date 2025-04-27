#!/bin/bash
# Deploy to Cloudflare Pages

# Build the application
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy .next --project-name=portfolio 