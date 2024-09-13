import { useTranslations } from "next-intl";


type Props = {
    text: string;
    image: string;
    onClick: () => void; // Nova prop para capturar o clique e abrir o modal
};

export default function FabricsDivs({ text, image, onClick }: Props) {
    const t = useTranslations('HomePage');


    return (
        <div
            className={`w-full h-[200px] ${image} bg-cover border-[6px] border-laranja flex flex-col justify-around items-center cursor-pointer
                relative text-center text-white text-lg px-2 font-bold md:text-sm md:w-[32%] lg:text-lg xl:text-2xl 2xl:h-[270px]`}
                onClick={onClick}
        >
            <div className={`w-full h-full bg-black opacity-50  absolute`}></div>
            <h6 className="absolute top-6">{text}</h6>
            {/* Passa a função onClick para AboutSpan */}
            <span
            className={`bg-laranja font-conthrax px-3 h-fit text-[10px] font-semibold rounded-xl uppercase cursor-pointer absolute bottom-8`}
            >{t('more')}</span>
        </div>
    );
}
