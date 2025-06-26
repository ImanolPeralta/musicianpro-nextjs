import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/musicianpro-nextjs' : '',
  trailingSlash: true,
  assetPrefix: isProd ? '/musicianpro-nextjs/' : '',
};

export default withFlowbiteReact(nextConfig);