/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static export
    images: {
      unoptimized: true,
    },
    compiler: {
      styledComponents: true,
    },
  };
  
  export default nextConfig;
  

/** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export', // Required for static export
//     images: {
//       unoptimized: true, // Necessary when using `output: 'export'`
//     },
//     compiler: {
//       styledComponents: true, // Enables SWC transform for styled-components
//     },
//     reactStrictMode: true, // Enables additional React checks
//     swcMinify: true, // Uses SWC for faster, optimized builds
//     eslint: {
//       ignoreDuringBuilds: true, // Avoid blocking production builds due to ESLint errors
//     },
//     typescript: {
//       ignoreBuildErrors: true, // Avoid blocking builds due to TS errors (optional, use with caution)
//     },
//   };
  
//   export default nextConfig;
  