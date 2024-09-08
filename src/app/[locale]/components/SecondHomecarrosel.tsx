"use client";

import { useState } from "react";

export const SecondHomeCarrosel = () => {
  const [changeBanner, setChangeBanner] = useState(1);
  const [visibleIcons, setVisibleIcons] = useState(0);

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
          Conheça nossas <span className='text-laranja'>linhas de produtos</span>
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
        <div className='w-full h-[120px] bg-white hidden justify-center items-center md:flex md:h-[80px] md:space-x-6 xl:h-[120px]'>
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
        className={`w-full h-[300px] mb-4 bg-cover mt-10 bg-center bg-no-repeat relative cursor-pointer md:mt-0 xl:mt-10 md:w-[90%] 
            z-40 md:bg-cover md:bg-top md:h-[225px] lg:h-[300px] xl:h-[420px] 2xl:h-[560px] 2xl:bg-contain
          ${changeBanner === 0 ? 'bg-banner-2' : ''}
          ${changeBanner === 1 ? 'bg-banner-3' : ''}
          ${changeBanner === 2 ? 'bg-banner-4' : ''}
          ${changeBanner === 3 ? 'bg-banner-1' : ''}
          ${changeBanner === 4 ? 'bg-banner-5' : ''}
          ${changeBanner === 5 ? 'bg-banner-6' : ''}`}
      >
      </div>
    </section>
  );
};
