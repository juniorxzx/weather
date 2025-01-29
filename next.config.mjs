/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  compilerOptions: {
    paths: {
      "@Assets/*": ["src/Assets/*"],
    },
  },
};

export default nextConfig;
