import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Header from './components/Header';
import "./globals.css";
import { Footer } from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const viewport = {
  viewport: "width=device-width, initial-scale=1.0"
};

interface MetadataParams {
  params: {
    locale: string;
  };
}


export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('desc'),
    keywords: t('key').split(','),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      siteName: "ANK&ILUMER",
      title: t('title'),
      description: t('desc'),
      url: 'https://ank&ilumer.com.br',
      images: [
        {
          url: '/images/products-mobile2.png',
          alt: "produtos Ank e Ilummer",
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '',
      title: t('title'),
      description: t('desc'),
      images: [
        {
          url: '/images/products-mobile2.png',
          alt: "produtos ank e  ilummer",
        },
      ],
    },
  };
}

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
        <link rel='icon' href="/favicon-1.ico" />
        {/*<meta name="google-site-verification" content="0o2UdGHKMas5T31hyhg1W6i_mzoKLRoLRnFM_ZrbHw8" />*/}
      </head>
      <SpeedInsights />
      <body className='overflow-x-hidden'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
