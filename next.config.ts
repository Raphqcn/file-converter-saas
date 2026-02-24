import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key : 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key : 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key : 'Content-Security-Policy',
            value: "default-src 'self'; " +
                   "script-src 'self' 'wasm-unsafe-eval' https://unpkg.com; " +
                   "worker-src 'self' blob:; " +
                   "connect-src 'self' https://unpkg.com; " +
                   "object-src 'none; " +
                   "baseè-url 'self';"
          }
        ],
      },
    ]
  },
};

export default nextConfig;
