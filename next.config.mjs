// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/instant-loan/:product(home-loan|personal-loan|car-loan|business-loan|construction-equipment-loan)",
        destination: "/loan/:product",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
                                                                                  
