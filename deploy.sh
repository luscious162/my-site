#!/bin/bash
# This script deploys the Next.js app to Cloudflare

# Exit on error
set -e

# Build the Next.js app
npm run build

# Deploy with Wrangler
npx wrangler publish 