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
                   "script-src 'self' 'unsafe-eval' 'unsafe-inline' 'wasm-unsafe-eval' https://unpkg.com; " +
                   "style-src 'self' 'unsafe-inline'; " +
                   "worker-src 'self' blob:; " +
                   "connect-src 'self' ws: wss: https://unpkg.com; " +
                   "object-src 'none'; " +
                   "base-uri 'self';"
          }
        ],
      },
    ]
  },
};

export default nextConfig;
