import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";

export default function RawMaterial() {
    const t = useTranslations('HomePage');


    return (
        <>
            <div id="raw" className="w-full h-[350px] flex justify-center items-center flex-col mb-10 md:h-[530px] lg:h-[650px] xl:h-[730px] 
                2xl:h-[1000px]">
                <div className="w-full h-full lg:w-[90%]">
                    <video src="/images/product.mp4"
                        autoPlay
                        loop
                        controls
                        muted
                        className="w-full h-full object-contain"
                        playsInline
                    ></video>
                </div>

                <div className="hidden justify-center items-center w-full mt-2 md:flex lg:mt-6">
                    <AboutSpan text={t('more-sec')}
                        style="bg-bluedark text-laranja mr-6 md:mr-0 text-[12px] lg:text-[16px] xl:text-base"
                        link="/Contact" />
                </div>
            </div>
        </>

    );
}
