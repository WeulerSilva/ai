import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
        gothan: ['Gothan', 'sans-serif'],
        renogare: ['Renogare', 'sans-serif'],
      },
      screens: {
        '3xl': '1921px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logo": "url('/images/logo.webp')",
        "containers": "url('/images/container.jpg')",
        "illumer": "url('/images/illumer-logo.webp')",
        "banner-0": "url('/images/banner-0.png')",
        "banner-1": "url('/images/banner-1.png')",
        "banner-2": "url('/images/banner-2.png')",
        "banner-3": "url('/images/banner-3.png')",
        "banner-4": "url('/images/banner-4.png')",
        "banner-5": "url('/images/banner-5.png')",
        "banner-6": "url('/images/banner-6.png')",
        "banner-7": "url('/images/banner-0.png')",
        "banner-8": "url('/images/banner-7.png')",
        "home-build": "url('/images/home-build.png')",
        "logo-1": "url('/images/logo-1.webp')",
        "logo-2": "url('/images/logo-2.webp')",
        "logo-3": "url('/images/logo-3.webp')",
        "logo-4": "url('/images/logo-4.webp')",
        "logo-5": "url('/images/logo-5.webp')",
        "logo-6": "url('/images/logo-6.webp')",
        "logo-7": "url('/images/logo-7.png')",
        "logo-8": "url('/images/logo-8.png')",
        "bag": "url('/images/bag.png')",
        "box-brand": "url('/images/box-brand.png')",
        "products": "url('/images/products-bg.webp')",
        "products-mobile": "url('/images/products-mobile2.png')",
        "icon-1": "url('/images/icon-1.webp')",
        "icon-2": "url('/images/icon-2.webp')",
        "icon-3": "url('/images/icon-3.webp')",
        "adult-1": "url('/images/adult-img.png')",
        "adult-2": "url('/images/bag.png')",
        "adult-3": "url('/images/box-brand.png')",
      },
      colors: {
        "laranja" : "#FAB21A",
        "bluelight" : "#36A9E1",
        "redclear" : "#E42229",
        "browndark" : "#363636",
        "bluedark" : "#002D3A",
      }
    },
  },
  safelist: [
    'bg-adult-1',
    'bg-adult-2',
    'bg-adult-3',
    // Adicione outras classes que você deseja preservar
  ],
  plugins: [],
};
export default config;
