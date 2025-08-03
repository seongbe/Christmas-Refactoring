// next.config.js (or next.config.ts if TS 지원 설정되어 있으면)

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    esmExternals: true, // ESM 사용
    legacyBrowsers: false, // 레거시 브라우저 지원 제거
  },

  async headers() {
    return [
      {
        source: '/images/ShiningLogo1.webp', // public 폴더 기준 경로
        headers: [
          {
            key: 'Link',
            value: '</images/ShiningLogo1.webp>; rel=preload; as=image; type=image/webp',
          },
        ],
      },
    ];
  },
  
};

module.exports = withBundleAnalyzer(nextConfig);