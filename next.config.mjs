import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
    svgr: true, // habilita importar SVG como componente
    },
}

export default withFlowbiteReact(nextConfig);