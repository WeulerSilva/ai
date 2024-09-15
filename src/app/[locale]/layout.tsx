import { NextIntlClientProvider} from 'next-intl';
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
  title: "ANK&ILUMER, Fornecendo Qualidade e Inovação.",
  description: "Na ANK&ILUMER, oferecemos soluções inovadoras desde 1986, com foco em qualidade, confiança e responsabilidade ambiental.",
  keywords: 'ANK, ILUMER, higiene, cuidados pessoais, produtos sustentáveis, White Label, matéria-prima, ECO VIDA, Babyfral, LadySec, PetSec, AdultSec, LIMPDENT',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: "https://ankilumer.com",
    title: "ANK&ILUMER - Soluções Inovadoras e Sustentáveis.",
    description: "A ANK&ILUMER oferece uma ampla gama de produtos de higiene e cuidados pessoais, destacando-se pela qualidade e compromisso com o meio ambiente.",
    siteName: "ANK&ILUMER",
    images: [{
      url: "/images/banner-mobile-0-pt.png",
      alt: "Imagem representativa da ANK&ILUMER"
    }],
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    site: "@ankilumer",
    creator: "@ankilumer",
    title: "ANK&ILUMER - Fornecendo Qualidade e Inovação.",
    description: "Desde 1986, a ANK&ILUMER tem sido líder em soluções de higiene e cuidados pessoais, com foco em sustentabilidade e eficiência.",
    images: [{
      url: "/images/banner-mobile-0-pt.png",
      alt: "Imagem representativa da ANK&ILUMER"
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
        <link rel='icon' href="/favicon-1.ico" />
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
