import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Necesario con varios root layouts (app/(it) y app/(es)): sin layout
    // común, el 404 de rutas inexistentes lo sirve app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
