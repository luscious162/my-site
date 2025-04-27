/**
 * The index.js file for Cloudflare Workers deployment
 * This simple script serves as an entry point for Cloudflare Workers
 * to proxy requests to the Next.js application.
 */

export default {
  async fetch(request, env, ctx) {
    // For API routes, we could handle them directly if needed
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      // Let Next.js handle API routes
      return fetch(request);
    }

    // For everything else, we can simply pass through to Next.js
    return fetch(request);
  }
}; 