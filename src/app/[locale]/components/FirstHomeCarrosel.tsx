import { useLocale } from "next-intl";
import Link from "next/link";

export const FirstHomeCarrosel = () => {
    const locale = useLocale();

    // Fontes dos vídeos com base no idioma
    const firstVideoSource = `/images/home-${locale}.mp4`;
    {/*const secondVideoSource = `/images/ank-home.mp4`;*/}
    const firstMobileVideoSource = `/images/home-mobile-${locale}.mp4`;
    {/*const secondMobileVideoSource = `/images/ank-home-mobile.mp4`;*/}

    return (
        <section>
            <div className='w-screen h-[430px] flex justify-center mt-14 md:mb-4 md:mt-14 xl:mt-20 md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px]'>
                <Link href={`${locale}/Products`} className="w-full h-full flex justify-center items-center">
                    <div className={`w-full h-full flex justify-end flex-col items-center mb-4 bg-cover bg-center bg-no-repeat relative
                         cursor-pointer md:w-[90%]  md:h-[210px] lg:h-[300px] xl:h-[400px] 2xl:h-[520px] 2xl:bg-contain`}>
                        <video
                            src={firstVideoSource}
                            autoPlay
                            muted
                            controls
                            loop // Não faz loop automático
                            playsInline
                            className="hidden md:block w-full h-full object-cover 2xl:object-contain"
                        ></video>

                        <video
                            src={firstMobileVideoSource}
                            autoPlay
                            muted
                            loop // Não faz loop automático
                            playsInline
                            className="w-full h-full object-contain md:hidden"
                        ></video>
                    </div>
                </Link>
            </div>
        </section>
    );
};
