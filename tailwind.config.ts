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
        "contact-social": "url('/images/contact-social.png')",
        "a&l": "url('/images/a&l.png')",
        "illumer": "url('/images/illumer-logo.webp')",
        "banner-0-pt": "url('/images/banner-0-pt.png')",
        "banner-0-es": "url('/images/banner-0-es.png')",
        "banner-0-en": "url('/images/banner-0-en.png')",
        "banner-1-pt": "url('/images/banner-1-pt.png')",
        "banner-1-en": "url('/images/banner-1-en.png')",
        "banner-1-es": "url('/images/banner-1-es.png')",
        "banner-2-pt": "url('/images/banner-2-pt.png')",
        "banner-2-en": "url('/images/banner-2-en.png')",
        "banner-2-es": "url('/images/banner-2-es.png')",
        "banner-4-pt": "url('/images/banner-4-pt.png')",
        "banner-4-en": "url('/images/banner-4-en.png')",
        "banner-4-es": "url('/images/banner-4-es.png')",
        "banner-5-pt": "url('/images/banner-5-pt.png')",
        "banner-5-en": "url('/images/banner-5-en.png')",
        "banner-5-es": "url('/images/banner-5-es.png')",
        "banner-6-pt": "url('/images/banner-6-pt.png')",
        "banner-6-en": "url('/images/banner-6-en.png')",
        "banner-6-es": "url('/images/banner-6-es.png')",
        "banner-7": "url('/images/banner-0.png')",
        "banner-8": "url('/images/banner-7.png')",
        "banner-mobile-0-pt": "url('/images/banner-mobile-0-pt.png')",
        "banner-mobile-0-en": "url('/images/banner-mobile-0-en.png')",
        "banner-mobile-0-es": "url('/images/banner-mobile-0-es.png')",
        "banner-mobile-1-pt": "url('/images/banner-mobile-1-pt.png')",
        "banner-mobile-1-en": "url('/images/banner-mobile-1-en.png')",
        "banner-mobile-1-es": "url('/images/banner-mobile-1-es.png')",
        "banner-mobile-2-pt": "url('/images/banner-mobile-2-pt.png')",
        "banner-mobile-2-en": "url('/images/banner-mobile-2-en.png')",
        "banner-mobile-2-es": "url('/images/banner-mobile-2-es.png')",
        "banner-3-pt": "url('/images/banner-3-pt.png')",
        "banner-3-en": "url('/images/banner-3-en.png')",
        "banner-3-es": "url('/images/banner-3-es.png')",
        "banner-mobile-3-pt": "url('/images/banner-mobile-3-pt.png')",
        "banner-mobile-3-en": "url('/images/banner-mobile-3-en.png')",
        "banner-mobile-3-es": "url('/images/banner-mobile-3-es.png')",
        "banner-mobile-4-pt": "url('/images/banner-mobile-4-pt.png')",
        "banner-mobile-4-en": "url('/images/banner-mobile-4-en.png')",
        "banner-mobile-4-es": "url('/images/banner-mobile-4-es.png')",
        "banner-mobile-5-pt": "url('/images/banner-mobile-5-pt.png')",
        "banner-mobile-5-en": "url('/images/banner-mobile-5-en.png')",
        "banner-mobile-5-es": "url('/images/banner-mobile-5-es.png')",
        "banner-mobile-6-pt": "url('/images/banner-mobile-6-pt.png')",
        "banner-mobile-6-en": "url('/images/banner-mobile-6-en.png')",
        "banner-mobile-6-es": "url('/images/banner-mobile-6-es.png')",
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
        "inovation": "url('/images/inovation.webp')",
        "sustentability": "url('/images/sustentability.png')",
        "contact-first": "url('/images/contact-first.png')",
        "atendent": "url('/images/atendent.png')",
        "icon-1": "url('/images/icon-1.webp')",
        "icon-2": "url('/images/icon-2.webp')",
        "icon-3": "url('/images/icon-3.webp')",
        "unisex": "url('/images/unisex.png')",
        "raw-material": "url('/images/raw-material.png')",
        "white-1": "url('/images/white-1.png')",
        "white-2": "url('/images/white-2.png')",
        "cert-1": "url('/images/certifications-1.png')",
        "cert-2": "url('/images/cert-2.png')",
        "cert-3": "url('/images/cert-3.png')",
        "cert-4": "url('/images/cert-4.png')",
        "cert-5": "url('/images/cert-5.png')",
        "cert-6": "url('/images/cert-6.png')",
        "cert-7": "url('/images/cert-7.png')",
        "cert-8": "url('/images/cert-8.png')",
        "cert-9": "url('/images/cert-9.png')",
        "adult-1": "url('/images/adult-img.png')",
        "adult-2": "url('/images/bag.png')",
        "adult-3": "url('/images/box-brand.png')",
        "al-1": "url('/images/al-1.png')",
        "w-1": "url('/images/w-1.jpg')",
        "w-2": "url('/images/w-2.jpg')",
        "w-3": "url('/images/w-3.jpg')",
        "w-4": "url('/images/w-4.jpg')",
        "fachada1": "url('/images/fab-1.jpg')",
        "fachada2": "url('/images/fab-2.jpg')",
        "fachada3": "url('/images/fab-3.jpg')",
        "fachada4": "url('/images/fab-4.jpg')",
        "fachada5": "url('/images/fachada5.jpg')",
        "fachada6": "url('/images/fachada6.jpg')",
        "machine1": "url('/images/fab-1-1.jpg')",
        "machine2": "url('/images/fab-2-1.jpg')",
        "machine3": "url('/images/fab-3-1.jpg')",
        "machine4": "url('/images/fab-4-1.jpg')",
        "machine5": "url('/images/machine5.jpg')",
        "prod1": "url('/images/fab-1-2.jpg')",
        "prod2": "url('/images/fab-2-2.jpg')",
        "prod3": "url('/images/fab-3-2.jpg')",
        "prod4": "url('/images/fab-4-2.jpg')",
        "prod5": "url('/images/prod5.jpg')",
        "prod6": "url('/images/prod6.jpg')",
        "emb1": "url('/images/fab-1-3.jpg')",
        "emb2": "url('/images/fab-2-3.jpg')",
        "emb3": "url('/images/fab-3-3.jpg')",
        "emb4": "url('/images/fab-4-3.jpg')",
        "emb5": "url('/images/emb5.jpg')",
        "emb6": "url('/images/emb6.jpg')",
        "adult-leito": "url('/images/adult-leito2.png')",
        "adult-fralda": "url('/images/adult-fralda2.png')",
        "adult-calça": "url('/images/adult-calça2.png')",
        "lady-absorvente": "url('/images/lady-absorvente.png')",
        "lady-fralda": "url('/images/lady-fralda.png')",
        "lady-protetor": "url('/images/lady-protetor.png')",
        "baby-fralda": "url('/images/baby-fralda.png')",
        "baby-calça": "url('/images/baby-calça.png')",
        "baby-lenço": "url('/images/baby-lenço.png')",
        "limp-pasta": "url('/images/limp-pasta.png')",
        "pet-fralda": "url('/images/pet-fralda.png')",
        "pet-tapete": "url('/images/pet-tapete.png')",
        "pet-lenço": "url('/images/pet-lenço.png')",
        "eco-lenço": "url('/images/eco-lenço.png')",
        "eco-toalha": "url('/images/eco-toalha.png')",
        "eco-fralda": "url('/images/eco-fralda.png')",
        "wp-1": "url('/images/wp-1.png')",
        "wp-2": "url('/images/wp-2.png')",
        "w-1-mp": "url('/images/w-1-mp.png')",
        "w-2-mp": "url('/images/w-2-mp.png')",
        "wp-3": "url('/images/wp-3.png')",
        "wp-4": "url('/images/spandex.png')",
        "wp-4-mp": "url('/images/spandex-mp2.png')",
        "placeholder": "url('/images/placeholder.jpeg')",
      },
      colors: {
        "laranja": "#FAB21A",
        "bluelight": "#36A9E1",
        "redclear": "#E42229",
        "browndark": "#363636",
        "bluedark": "#002D3A",
      }
    },
  },
  safelist: [
    'bg-adult-1',
    'bg-adult-2',
    'bg-adult-3',
    "bg-adult-leito",
    "bg-adult-fralda",
    "bg-adult-calça",
    "bg-lady-absorvente",
    "bg-lady-fralda",
    "bg-lady-protetor",
    "bg-baby-fralda",
    "bg-baby-calça",
    "bg-baby-lenço",
    "bg-limp-pasta",
    "bg-pet-fralda",
    "bg-pet-tapete",
    "bg-pet-lenço",
    "bg-eco-fralda",
    "bg-eco-toalha",
    "bg-eco-lenço",
    "bg-banner-0-pt",
    "bg-banner-mobile-0-pt",
    "bg-banner-0-en",
    "bg-banner-mobile-0-en",
    "bg-banner-0-es",
    "bg-banner-mobile-0-es",
    "bg-banner-mobile-3-pt",
    "bg-banner-3-pt",
    "bg-banner-mobile-3-es",
    "bg-banner-3-es",
    "bg-banner-mobile-3-en",
    "bg-banner-3-en",
    "bg-al-1",
    "bg-al-2",
    "bg-wp-1",
    "bg-wp-2",
    "bg-wp-3",
    "bg-wp-4",
    "bg-w-1-mp",
    "bg-w-2-mp",
    "bg-wp-4-mp",
    "bg-placeholder"
    
    // Adicione outras classes que você deseja preservar
  ],
  plugins: [],
};
export default config;
