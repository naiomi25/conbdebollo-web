/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', 
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', 
      },
      {
        protocol: 'https',
        hostname: 'blog.tuimusement.com', 
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com', 
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com', 
      },
      
    ],
  },
};

export default nextConfig;
