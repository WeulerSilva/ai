"use client"

import { useTranslations } from "next-intl";

export default function InovationPage() {
    const t = useTranslations('journey');

    return (
        <section className='w-screen h-full flex justify-center items-center flex-col mt-16 lg:mt-14 xl:mt-36'>
            <div className="hidden w-full h-[60vh] bg-green-200 md:w-[90%] lg:h-[80%]">
                <video src="/images/inov.mp4"
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                ></video>
            </div>

            <div className="w-[90%] h-full text-justify flex justify-center items-start flex-col mt-4 mb-12 text-[18px] md:w-[80%] xl:text-xl">
                <p><span className="pl-8"></span>
                    {t('p1')}
                </p>
            </div>

            <div className="w-full h-[600px] flex flex-col justify-center bg-[#AAAAA9]/30 lg:w-[100%] lg:flex-row lg:h-[400px] xl:h-[500px] 2xl:h-[450px]">
                <div id="Inovation" className="w-[100%] h-full flex justify-center items-center flex-col lg:w-[80%] lg:flex-row-reverse">
                    <div className="w-full h-full flex justify-center items-start text-2xl text-bluedark 
                        border-l-[16px] border-laranja md:h-[50%] lg:h-full xl:text-2xl lg:w-[50%] 2xl:text-3xl">
                        <div className="w-full pl-6 lg:w-[100%] xl:pl-20">
                            <h1 className="mt-4 text-laranja lg:my-6 xl:my-16">{t('inov')}</h1>
                            <p className="text-[16px] text-gray-700 text-justify pr-10 pt-4 md:pr-0 md:leading-8 lg:pt-0 xl:mt-4 xl:text-base 2xl:text-lg">
                                <span className="pl-6"></span>
                                {t('inov-p')}
                            </p>
                        </div>

                    </div>

                    <div className="w-full h-[50%] flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row lg:h-full lg:w-[50%]">
                        <div className="w-full h-full bg-inovation bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-left xl:bg-left"></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[600px] flex flex-col justify-center bg-[#93C248]/30 lg:w-[100%] lg:flex-row lg:h-[400px] xl:h-[500px] 2xl:h-[450px]">
                <div id="sust" className="w-[100%] h-full flex justify-center items-center flex-col lg:w-[80%] lg:flex-row">
                    <div className="w-full h-full flex justify-start items-start text-2xl text-bluedark 
                        border-l-[16px] border-laranja  md:h-[50%] lg:border-none lg:h-full lg:justify-center lg:w-[50%] xl:text-2xl 2xl:text-3xl">
                        <div className="w-full pl-6 lg:pl-0 lg:pr-10 lg:border-none lg:w-[100%] xl:pr-20">
                            <h1 className="mt-4 text-[#356A2D] lg:my-6 xl:my-16">{t('susten')}</h1>
                            <p className="text-[16px] text-gray-700 text-justify pr-10 pt-4 md:pr-0 md:leading-8 lg:pt-0 xl:mt-4 xl:text-base 2xl:text-lg">
                                <span className="pl-6"></span>
                                {t('susten-p')}
                            </p>
                        </div>

                    </div>

                    <div className="w-full h-[50%] flex flex-col space-y-2 lg:border-l-[16px] border-laranja md:space-y-0 md:space-x-2 md:flex-row lg:h-full lg:w-[50%]">
                        <div className="w-full h-full bg-sustentability bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-center"></div>
                    </div>
                </div>
            </div>

            <div className="w-[80%] h-full text-base text-bluedark text-center py-10 xl:text-lg 2xl:text-xl">
                <h4>
                    {t('end')}
                </h4>
            </div>
        </section>
    );
};
