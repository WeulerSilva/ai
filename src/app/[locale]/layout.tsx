import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from './components/Header';
import "./globals.css";
import { Footer } from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next';

export const viewport = {
  viewport: "width=device-width, initial-scale=1.0"
};

export const metadata: Metadata = {
  title: "ilumer, Construindo relações duradouras.",
  description: "Desde 1986, construindo relações duradouras, baseadas na confiança, com eficiência e transparência.",
  keywords: 'ilumer, relações duradouras, confiança, eficiência, transparência, ANK, Babyfral, LadySec, PetSec, AdultSec, ECO VIDA, LIMPDENT',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: "https://ilumer.com",
    title: "ilumer, Construindo relações duradouras.",
    description: "Desde 1986, construindo relações duradouras, baseadas na confiança, com eficiência e transparência.",
    siteName: "ilumer",
    images: [{
      url: "/images/products-mobile2.png",
      alt: "Imagem representativa da ilumer"
    }],
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    site: "@ilumer",
    creator: "@ilumer",
    title: "ilumer, Construindo relações duradouras.",
    description: "Desde 1986, construindo relações duradouras, baseadas na confiança, com eficiência e transparência.",
    images: [{
      url: "/images/products-mobile2.png",
      alt: "Imagem representativa da ilumer"
    }]
  }
};



export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Carregar as mensagens com base no locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href="/favicon.ico" />
        {/*<meta name="google-site-verification" content="0o2UdGHKMas5T31hyhg1W6i_mzoKLRoLRnFM_ZrbHw8" />*/}
      </head>
      <SpeedInsights/>
      <body className='overflow-x-hidden'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
