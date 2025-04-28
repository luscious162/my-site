#!/bin/bash
# This script deploys the Next.js app to Cloudflare Pages

# Exit on error
set -e

# Build the Next.js app
npm run build

# Deploy with Wrangler Pages
npx wrangler pages deploy out --project-name=portfolio 