/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Provide a dummy Resend API key for build
    RESEND_API_KEY: 're_dummy_key_for_build_only',
  },
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
