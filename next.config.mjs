/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Provide a dummy Resend API key for build
    RESEND_API_KEY: 're_dummy_key_for_build_only',
  },
  output: 'standalone',
};

export default nextConfig;
