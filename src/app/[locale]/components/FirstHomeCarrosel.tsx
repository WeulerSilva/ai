"use client"

import { useLocale } from "next-intl";



export const FirstHomeCarrosel = () => {
    const locale = useLocale();
    const array = ['bg-banner-0-pt', 'bg-banner-mobile-0-pt','bg-banner-0-en', 'bg-banner-mobile-0-en','bg-banner-0-es', 'bg-banner-mobile-0-es']

    {/*
    useEffect(() => {
        const timer = setTimeout(() => {
            setChangeBanner((prevBanner) => (prevBanner < 2 ? prevBanner + 1 : 0));
        }, 7000); // 10 segundos

        // Limpa o timeout quando o componente for desmontado ou quando o changeBanner mudar
        return () => clearTimeout(timer);
    }, [changeBanner]);
    */}

    console.log(array)
    return (
        <section>
            <div className='w-screen h-[500px] flex justify-center mt-12 md:mb-4 md:mt-14 xl:mt-20 md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px]'>
                <div className={`w-full h-full flex justify-end flex-col items-center mb-4 bg-cover bg-center bg-no-repeat relative
                         ${locale === 'pt' ? 'bg-banner-mobile-0-pt md:bg-banner-0-pt' : ''} 
                         ${locale === 'en' ? 'bg-banner-mobile-0-en md:bg-banner-0-en' : ''}
                         ${locale === 'es' ? 'bg-banner-mobile-0-es md:bg-banner-0-es' : ''}
                         cursor-pointer md:w-[90%]  md:h-[210px] lg:h-[300px] xl:h-[400px] 2xl:h-[520px] 2xl:bg-contain`}>

                    {/*         
                    <div className='w-[100px] h-[30px]'>
                        <div className="w-full h-full flex justify-between items-center">
                            <div className={`w-[15px] h-[15px] ${changeBanner === 0 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                onClick={() => setChangeBanner(0)}></div>

                            <div className={`w-[15px] h-[15px] ${changeBanner === 1 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                onClick={() => setChangeBanner(1)}></div>

                            <div className={`w-[15px] h-[15px] ${changeBanner === 2 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                onClick={() => setChangeBanner(2)}></div>
                        </div>
                    </div>
                    */}

                </div>
            </div>

        </section>
    );
};
