"use client";

import { useTranslations } from "next-intl";
import { useRouter} from "next/navigation";

type Props = {
    style?: string;
    text?: string;
    link?: string;
}

export const AboutSpan = ({ style, text, link = '/' }: Props) => {
    const t = useTranslations('HomePage');
    const router = useRouter();

    const handleClick = () => {
        const currentPath = window.location.pathname;
        const locale = currentPath.split('/')[1];
        router.push(`/${locale}${link}`);
    };

    return (
        <span
            onClick={handleClick}
            className={`${style} font-conthrax px-3 h-fit text-[10px] font-semibold rounded-xl uppercase cursor-pointer`}
        >
            {text ? text : t('more')}
        </span>
    );
}
