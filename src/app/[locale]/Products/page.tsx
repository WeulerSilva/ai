import { getTranslations } from "next-intl/server";

interface MetadataParams {
  params: {
    locale: string;
  };
  searchParams: {
    product?: string;
    banner?: number;
  };
}

export async function generateMetadata({ params: { locale } }: MetadataParams) {
    const t = await getTranslations({ locale, namespace: 'meta' });

    return {
        title: t('products'),
        description: t('products-desc'),
        keywords: t('products-key').split(','),
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            siteName: "ANK&ILUMER",
            title: t('products'),
            description: t('products-desc'),
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
            title: t('products'),
            description: t('products-desc'),
            images: [
                {
                    url: '/images/products-mobile2.png',
                    alt: "produtos ank e  ilummer",
                },
            ],
        },
    };
}

import ProductPage from '@/app/[locale]/components/ProductPage';

interface PageProps {
  searchParams: {
    product?: string;
    banner?: number;
  };
}

export default function Page({ searchParams }: PageProps) {
  return <ProductPage searchParams={searchParams} />;
}