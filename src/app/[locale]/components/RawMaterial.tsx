import { useTranslations } from "next-intl";
import { CertificationsLogos } from "./CertificationsLogos";


export default function RawMaterial() {
    const t = useTranslations('products');

    return (
        <>
            <div className="w-full h-[900px] flex justify-center items-center flex-col mb-10 md:h-[800px] lg:h-[400px] xl:h-[530px]">
                <h2 id="Raw-Material" className="text-2xl text-laranja font-bold mb-8 xl:text-4xl">{t('raw-1')}<span className="text-bluedark">{t('raw-2')}</span></h2>

                <div id="raw" className="w-full h-full flex flex-col border-y-[12px] border-laranja lg:w-[90%] lg:flex-row">
                    <div className="w-full h-full bg-raw-material bg-contain bg-center bg-no-repeat lg:bg-cover lg:bg-left lg:w-[40%]">

                    </div>
                    <div className="w-full h-full flex lg:w-[60%]">
                        <div className="w-full h-full px-6 lg:px-0 lg:pl-6 lg:w-[90%]">
                            <p className="text-[16px] text-gray-700 text-justify pt-4 lg:pt-0 xl:mt-4 xl:text-[20px]"><span className="pl-6"></span>
                                {t('raw-p')}
                            </p>
                            <div id="White" className="w-full h-full flex text-[20px] flex-col mt-4 text-bluedark font-semibold mb-4
                             md:flex-row md:leading-10 md:text-2xl lg:text-xl xl:text-3xl">
                                <ul className="list-disc marker:text-laranja w-full pl-6">
                                    <li>{t("raw-li1")}</li>
                                    <li>{t("raw-li2")}</li>
                                    <li>{t("raw-li3")}</li>
                                    <li>{t("raw-li4")}</li>
                                    <li>{t("raw-li5")}</li>
                                </ul>

                                <ul className="list-disc marker:text-laranja w-full pl-6 md:pl-0">
                                    <li>{t("raw-li6")}</li>
                                    <li>{t("raw-li7")}</li>
                                    <li>{t("raw-li8")}</li>
                                    <li>{t("raw-li9")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[680px] flex justify-center items-center flex-col mb-10 md:h-[500px] lg:h-[400px] xl:h-[500px]">

                <div className="w-full h-full flex flex-col border-y-[12px] border-bluedark lg:w-[90%] lg:flex-row">
                    <div className="w-full h-[40%] flex justify-start items-start text-2xl font-bold text-bluedark 
                        lg:h-full xl:text-4xl lg:justify-end lg:w-[40%]">
                        <div className="w-full px-6 lg:px-0 lg:w-[90%]">
                            <h1 className="mt-4 lg:my-16">{t('white-1')} <span className="text-laranja">{t('white-2')}</span></h1>
                            <p className="text-[16px] text-gray-700 text-justify pt-4 lg:pr-[10%] lg:pt-0 xl:mt-4 xl:text-[20px]">
                                <span className="pl-6"></span>
                                {t('white-p')}
                            </p>
                        </div>

                    </div>
                    <div className="w-full h-[60%] flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row lg:h-full lg:w-[60%]">
                        <div className="w-full h-full bg-white-1 bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-left bg-red-200"></div>
                        <div className="w-full h-full bg-white-2 bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-left bg-green-200"></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center text-bluedark font-bold text-2xl xl:text-4xl">
                <div id="cert" className="w-full h-full flex justify-center items-center mb-10 px-6">
                    <h2>
                        {t('our-1')} <span className="text-laranja">{t('our-2')}</span>

                    </h2>
                    <span className="ml-8 w-[240px] h-[110px] bg-cert-1 bg-cover bg-center bg-no-repeat"></span>
                </div>

                <div className="w-[80%]">
                    <div className='flex flex-wrap justify-center gap-4 w-full mb-8 pr-6 md:pr-0 md:flex md:justify-between
                        lg:gap-8 xl:mb-16'>
                        <CertificationsLogos style='bg-cert-2'/>
                        <CertificationsLogos style='bg-cert-3'/>
                        <CertificationsLogos style='bg-cert-4'/>
                        <CertificationsLogos style='bg-cert-5'/>
                        <CertificationsLogos style='bg-cert-6'/>
                        <CertificationsLogos style='bg-cert-7'/>
                        <CertificationsLogos style='bg-cert-8'/>
                        <CertificationsLogos style='bg-cert-9'/>
                    </div>
                </div>
            </div>
        </>

    );
}
