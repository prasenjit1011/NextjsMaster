/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // Optional: disables Next.js image optimization for easier GCP deploys
    },
  
    async headers() {
      return [
        {
          // Match all routes for global CORS headers (optional)
          source: "/(.*)",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" }, // You can restrict to your domain
            { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export', // 👈 required for static export in Next.js 13+
//     images: {
//         unoptimized: true, // if using images
//     },
//     useFileSystemPublicRoutes: true,
//     "headers": [
//         {
//             "source": "/(.*)",
//             "headers": [
//                 { "key": "Access-Control-Allow-Credentials", "value": "true" },
//                 { "key": "Access-Control-Allow-Origin", "value": "*" },
//                 { "key": "Access-Control-Allow-Methods", "value": "GET,DELETE,PATCH,POST,PUT" },
//                 { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
//             ]
//         }
//     ],
//     async headers() {
//         return [
//             {
//                 // matching all API routes
//                 source: "/api/:path*",
//                 headers: [
//                     { key: "Access-Control-Allow-Credentials", value: "true" },
//                     { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
//                     { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
//                     { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//                 ]
//             }
//         ]
//     }
// }


// export default nextConfig;
