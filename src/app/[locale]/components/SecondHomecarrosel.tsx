"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export const SecondHomeCarrosel = () => {
  const locale = useLocale();
  const t = useTranslations('HomePage');
  const [changeBanner, setChangeBanner] = useState(1);
  const [visibleIcons, setVisibleIcons] = useState(0);

  const array = ['bg-banner-3-pt', 'bg-banner-mobile-3-pt','bg-banner-3-en', 'bg-banner-mobile-3-en','bg-banner-3-es', 'bg-banner-mobile-3-es']

  const logos = [
    "bg-logo-1",
    "bg-logo-3",
    "bg-logo-5",
    "bg-logo-2",
    "bg-logo-4",
    "bg-logo-6",
  ];

  const nextIcons = () => {
    setVisibleIcons((prev) =>
      prev + 2 >= logos.length ? 0 : prev + 2
    );
  };

  const prevIcons = () => {
    setVisibleIcons((prev) =>
      prev - 2 < 0 ? logos.length - 2 : prev - 2
    );
  };

  return (
    <section className='w-screen h-full flex justify-center items-center flex-col'>
      <div className='w-[90%] h-full flex justify-start items-start flex-col md:w-[80%]'>
        <h1 className='text-bluedark text-[20px] font-bold mb-10 lg:text-[24px] md:mb-0 lg:mb-4 xl:text-[30px] 2xl:text-[2.6rem] 2xl:mb-10'>
          {t('knew-1')} <span className='text-laranja'>{t('knew-2')}</span>
        </h1>

        {/* Carrossel para mobile */}
        <div className="w-full h-[60px] bg-white flex justify-center items-center md:hidden relative">
          {/* Botão para voltar */}
          <button
            className="absolute left-0 p-2 bg-gray-300 hover:bg-gray-400"
            onClick={prevIcons}
          >
            &lt;
          </button>

          {/* Exibição de dois ícones por vez */}
          <div className="flex space-x-6">
            <div
              className={`w-[100px] h-[100px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons]} ${changeBanner === visibleIcons ? '' : 'opacity-40'} hover:opacity-90`}
              onClick={() => setChangeBanner(visibleIcons)}
            ></div>
            <div
              className={`w-[100px] h-[100px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons + 1]} ${changeBanner === visibleIcons + 1 ? '' : 'opacity-40'} hover:opacity-90`}
              onClick={() => setChangeBanner(visibleIcons + 1)}
            ></div>
          </div>

          {/* Botão para avançar */}
          <button
            className="absolute right-0 p-2 bg-gray-300 hover:bg-gray-400"
            onClick={nextIcons}
          >
            &gt;
          </button>
        </div>

        {/* Layout tradicional para desktop */}
        <div id="Brands" className='w-full h-[120px] bg-white hidden justify-center items-center md:flex md:h-[80px] md:space-x-6 xl:h-[75px]'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`w-full h-full cursor-pointer bg-contain bg-no-repeat bg-center ${logo}
                ${changeBanner === index ? '' : 'opacity-40'} hover:opacity-90`}
              onClick={() => setChangeBanner(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Exibição do banner */}
      <div
        className={`w-full h-[430px] mb-4 bg-cover mt-10 bg-center bg-no-repeat relative cursor-pointer md:mt-0 xl:mt-10 md:w-[90%] 
            z-40 md:bg-cover md:bg-top md:h-[225px] lg:h-[300px] xl:h-[420px] 2xl:h-[560px] 2xl:bg-contain
            ${changeBanner === 0 && locale === 'pt' ? 'bg-banner-mobile-2-pt md:bg-banner-2-pt' : ''}
            ${changeBanner === 0 && locale === 'en' ? 'bg-banner-mobile-2-en md:bg-banner-2-en' : ''}
            ${changeBanner === 0 && locale === 'es' ? 'bg-banner-mobile-2-es md:bg-banner-2-es' : ''}


          ${changeBanner === 1 && locale === 'pt' ? 'bg-banner-mobile-3-pt md:bg-banner-3-pt' : ''}
          ${changeBanner === 1 && locale === 'en' ? 'bg-banner-mobile-3-en md:bg-banner-3-en' : ''}
          ${changeBanner === 1 && locale === 'es' ? 'bg-banner-mobile-3-es md:bg-banner-3-es' : ''}

          ${changeBanner === 2 && locale === 'pt' ? 'bg-banner-mobile-4-pt md:bg-banner-4-pt' : ''}
          ${changeBanner === 2 && locale === 'en' ? 'bg-banner-mobile-4-en md:bg-banner-4-en' : ''}
          ${changeBanner === 2 && locale === 'es' ? 'bg-banner-mobile-4-es md:bg-banner-4-es' : ''}

          ${changeBanner === 3 && locale === 'pt' ? 'bg-banner-mobile-1-pt md:bg-banner-1-pt' : ''}
          ${changeBanner === 3 && locale === 'en' ? 'bg-banner-mobile-1-en md:bg-banner-1-en' : ''}
          ${changeBanner === 3 && locale === 'es' ? 'bg-banner-mobile-1-es md:bg-banner-1-es' : ''}

          ${changeBanner === 4 && locale === 'pt' ? 'bg-banner-mobile-5-pt md:bg-banner-5-pt' : ''}
          ${changeBanner === 4 && locale === 'en' ? 'bg-banner-mobile-5-en md:bg-banner-5-en' : ''}
          ${changeBanner === 4 && locale === 'es' ? 'bg-banner-mobile-5-es md:bg-banner-5-es' : ''}

          ${changeBanner === 5 && locale === 'pt' ? 'bg-banner-mobile-6-pt md:bg-banner-6-pt' : ''}
          ${changeBanner === 5 && locale === 'en' ? 'bg-banner-mobile-6-en md:bg-banner-6-en' : ''}
          ${changeBanner === 5 && locale === 'es' ? 'bg-banner-mobile-6-es md:bg-banner-6-es' : ''}
      `}    
      >
      </div>
    </section>
  );
};
