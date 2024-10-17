import { getTranslations } from "next-intl/server";

interface MetadataParams {
    params: {
        locale: string;
    };
}

export async function generateMetadata({ params: { locale } }: MetadataParams) {
    const t = await getTranslations({ locale, namespace: 'meta' });

    return {
        title: t('inovation'),
        description: t('inovation-desc'),
        keywords: t('key').split(','),
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            siteName: "ANK&ILUMER",
            title: t('inovation'),
            description: t('inovation-desc'),
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
            title: t('inovation'),
            description: t('inovation-desc'),
            images: [
                {
                    url: '/images/products-mobile2.png',
                    alt: "produtos ank e  ilummer",
                },
            ],
        },
    };
}

import InovationPage from "../components/InovationPage";

export default function Page() {
    return <InovationPage />;
}
