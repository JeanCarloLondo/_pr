/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // recomendado para Vercel
  images: {
    unoptimized: true, // si usas imágenes estáticas
  },
}

module.exports = nextConfig