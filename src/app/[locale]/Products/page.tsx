"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

type LogoItem = [string, string];

export default function Pages() {
  const t = useTranslations('products');
  const [changeBanner, setChangeBanner] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState(0);
  const [productsName, setProductsName] = useState('adult-sec');
  const [selectedType, setSelectedType] = useState("photo-2");

  const logos: LogoItem[] = [
    ["bg-logo-1", "adult-sec"],
    ["bg-logo-3", "lady-sec"],
    ["bg-logo-5", "babyfral"],
    ["bg-logo-2", "limpdent"],
    ["bg-logo-4", "petsec"],
    ["bg-logo-6", "ecovida"],
    ["bg-logo-7", "a&l-mp"],
    ["bg-logo-8", "a&l-wl"]
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

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  return (
    <section className='w-screen h-full flex justify-center items-center flex-col mt-16 lg:mt-24 xl:mt-36'>
      <div className='w-[90%] h-full flex justify-start items-start flex-col lg:w-[80%]'>
        <h1 className='text-bluedark text-[20px] font-bold mb-4 lg:text-[24px] md:mb-0 lg:mb-4 xl:text-[30px] 2xl:text-[2.6rem] 2xl:mb-10'>
          {t('h1')} <span className='text-laranja'>{t('h1-2')}</span>
        </h1>

        {/* Carrossel para mobile */}
        <div className="w-full h-[60px] bg-white flex justify-center items-center mb-4 md:hidden relative">
          {/* Botão para voltar */}
          <button
            className="absolute left-0 p-2 bg-gray-300 hover:bg-gray-400"
            onClick={prevIcons}
          >
            &lt;
          </button>

          <div className="flex space-x-6">
            {/* Verifica se o ícone atual (visibleIcons) existe no array logos */}
            {logos[visibleIcons] && logos[visibleIcons][0] && (
              <div
                className={`w-[100px] h-[100px] bg-contain bg-no-repeat bg-center cursor-pointer
      ${logos[visibleIcons][0]} ${changeBanner === visibleIcons ? '' : 'opacity-40'} hover:opacity-90`}
                onClick={() => {
                  setChangeBanner(visibleIcons);
                  setProductsName(logos[visibleIcons] ? logos[visibleIcons][1] : '');
                }}
              ></div>
            )}

            {/* Verifica se o próximo ícone (visibleIcons + 1) existe no array logos */}
            {logos[visibleIcons + 1] && logos[visibleIcons + 1][0] && (
              <div
                className={`w-[100px] h-[100px] bg-contain bg-no-repeat bg-center cursor-pointer
      ${logos[visibleIcons + 1][0]} ${changeBanner === visibleIcons + 1 ? '' : 'opacity-40'} hover:opacity-90`}
                onClick={() => {
                  setChangeBanner(visibleIcons + 1);
                  setProductsName(logos[visibleIcons + 1] ? logos[visibleIcons + 1][1] : '');
                }}
              ></div>
            )}
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
        <div className="w-full h-[120px] bg-white hidden justify-center items-center md:flex md:h-[80px] md:space-x-6 xl:h-[120px]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`w-full h-full cursor-pointer bg-contain bg-no-repeat bg-center ${logo ? logo[0] : ''}
        ${changeBanner === index ? "" : "opacity-40"} hover:opacity-90`}
              onClick={() => {
                setChangeBanner(index);
                setProductsName(logo ? logo[1] : '');
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Exibição do "Modal" */}

      <div className="w-full h-full flex flex-col justify-start items-center mb-10 lg:w-[90%]">
        <div className="w-full h-[60px] bg-[#00679a3d] flex justify-start items-center uppercase text-[14px] font-bold
               text-bluedark md:text-[16px] lg:text-xl">
          <div className="flex w-full h-full justify-around items-center space-x-8 md:justify-start md:ml-[5%]">
            <span onClick={() => handleTypeClick('photo-1')} className={`${selectedType === 'photo-1' ? 
                'border-b-4 border-bluelight text-bluelight' : 'border-b-4 border-transparent'} cursor-pointer`}>
              {t(`${productsName}.type-1`)}
            </span>
            <span onClick={() => handleTypeClick('photo-2')} className={`${selectedType === 'photo-2' ? 
                'border-b-4 border-bluelight text-bluelight' : 'border-b-4 border-transparent'} cursor-pointer`}>
              {t(`${productsName}.type-2`)}
            </span>
            <span onClick={() => handleTypeClick('photo-3')} className={`${selectedType === 'photo-3' 
              ? 'border-b-4 border-bluelight text-bluelight' : 'border-b-4 border-transparent'} cursor-pointer`}>
              {t(`${productsName}.type-3`)}
            </span>
          </div>

        </div>

        <div className="w-full h-full bg-white flex-col flex lg:flex-row">
          <div className="w-full bg-[#00679a27] flex justify-center items-center flex-col lg:w-[40%]">
            <div className={`${t(`${productsName}.${selectedType}`)} w-[90%] h-[260px] mt-12 bg-contain bg-center bg-no-repeat md:h-[320px] lg:h-[340px] md:w-[70%] xl:w-[90%] 2xl:h-[530px]`}>
            </div>

            {(productsName === "adult-sec" || productsName === 'babyfral') && (
              <div className="w-full h-full flex justify-start items-center flex-col mt-4 text-sm font-bold text-bluedark
              md:text-lg lg:text-[12px] lg:w-[90%] lg:leading-4 xl:leading-5 xl:text-lg 2xl:leading-6 2xl:text-xl">
                <div className="w-full flex items-center lg:w-[90%]">
                  <div className="w-full flex items-center flex-col">
                    <span>Tamaños</span>
                    <span>Sizes</span>
                    <span>Tamanhos</span>
                  </div>

                  <div className="w-full flex items-center flex-col">
                    <span></span>
                    <span>Peso</span>
                    <span>Weight</span>
                  </div>

                  <div className="w-full flex items-center flex-col">
                    <span></span>
                    <span>Cintura {"( cm )"}</span>
                    <span>Waistline {"( cm )"}</span>
                  </div>
                </div>



                <div className="w-full h-full flex justify-start items-center flex-col mt-4">
                  <div className="w-[90%] flex justify-around items-center bg-white border-2 border-bluedark rounded-3xl py-1 mb-4
                  text-sm 2xl:text-lg">
                    <span className="px-4 w-[116px] 2xl:w-[200px]"><span className="text-lg md:text-2xl 2xl:text-3xl">M</span> Mediana</span>
                    <span className="border-x-2 border-bluedark px-2">de 20 a 45 Kg</span>
                    <span className="px-8 w-[117px] 2xl:w-[200px] 2xl:text-right">70-110</span>
                  </div>

                  <div className="w-[90%] flex justify-around items-center bg-white border-2 border-bluedark rounded-3xl py-1 mb-4
                  text-sm 2xl:text-lg">
                    <span className="px-4 w-[116px] 2xl:w-[200px]"><span className="text-lg md:text-2xl 2xl:text-3xl">L</span> Grande</span>
                    <span className="border-x-2 border-bluedark px-2">de 45 a 75 Kg</span>
                    <span className="px-8 w-[118px] 2xl:w-[200px] 2xl:text-right">105-170</span>
                  </div>

                  <div className="w-[90%] flex justify-around items-center bg-white border-2 border-bluedark rounded-3xl py-1 mb-4
                  text-sm 2xl:text-lg">
                    <span className="px-4 w-[116px] 2xl:w-[200px]"><span className="text-lg md:text-2xl 2xl:text-3xl">XL</span> Extra Grande</span>
                    <span className="border-x-2 border-bluedark px-2">mais de 75 Kg</span>
                    <span className="px-8 w-[118px] 2xl:w-[200px] 2xl:text-right">145-170</span>
                  </div>
                </div>
              </div>
            )}

            {(productsName != "adult-sec" && productsName != 'babyfral') && (
              <div className="w-[85%] h-full flex flex-col justify-start items-start pt-8 md:w-[85%] lg:w-[70%]">
                <h6 className="text-xl mb-4 font-bold text-bluedark md:text-3xl 2xl:text-4xl">Principais <span className="text-laranja">Caracteristicas:</span></h6>
                <ul className="text-base font-bold text-bluedark md:text-xl xl:text-2xl">
                  <li className="list-disc border-b-4 border-white mb-2">Saboroso</li>
                  <li className="list-disc border-b-4 border-white mb-2">adosicado</li>
                  <li className="list-disc border-b-4 border-white mb-2">cheiroso</li>
                  <li className="list-disc border-b-4 border-white mb-2">rapida absorção</li>
                </ul>
              </div>
            )}

          </div>



          {/* Infors about the products */}
          <div className="w-full h-full bg-[#00679a27] flex justify-start items-center py-8 lg:w-[60%]">
            <div className="w-full h-[90%] bg-white rounded-[40px] flex flex-col justify-start items-center px-6 lg:w-[90%]">
              <div className="flex items-center justify-between w-full mt-6 mb-3">
                <h6 className="text-xl font-bold text-bluelight md:text-2xl xl:text-3xl">{t(`${productsName}.h1`)}</h6>
                <span className="w-[120px] h-[60px] bg-green-600"></span>
              </div>

              <div className="w-full h-full flex flex-col justify-start items-start mb-16">
                <ul className="space-y-4">
                  <div className="text-bluedark text-lg font-semibold md:text-xl xl:text-2xl">
                    <li>{t(`${productsName}.li-1`)}</li>
                    <p className="text-base xl:text-xl">{t(`${productsName}.li-1-p`)}</p>
                  </div>

                  <div className="text-bluedark text-lg font-semibold md:text-xl xl:text-2xl">
                    <li>{t(`${productsName}.li-2`)}</li>
                    <p className="text-base xl:text-xl">{t(`${productsName}.li-2-p`)}</p>
                  </div>

                  <div className="text-bluedark text-lg font-semibold md:text-xl xl:text-2xl">
                    <li>{t(`${productsName}.li-3`)}</li>
                    <p className="text-base xl:text-xl">{t(`${productsName}.li-3-p`)}</p>
                  </div>

                  <div className="text-bluedark text-lg font-semibold md:text-xl xl:text-2xl">
                    <li>{t(`${productsName}.li-4`)}</li>
                    <p className="text-base xl:text-xl">{t(`${productsName}.li-4-p`)}</p>
                  </div>

                  <div className="text-bluedark text-lg font-semibold md:text-xl xl:text-2xl">
                    <li>{t(`${productsName}.li-5`)}</li>
                    <p className="text-base xl:text-xl">{t(`${productsName}.li-5-p`)}</p>
                  </div>

                  <div className="text-bluedark text-lg font-semibold md:text-xl xl:text-2xl">
                    <li>{t(`${productsName}.li-6`)}</li>
                    <p className="text-base xl:text-xl">{t(`${productsName}.li-6-p`)}</p>
                  </div>

                  <div className="text-bluedark text-lg font-semibold md:text-xl xl:text-2xl">
                    <li>{t(`${productsName}.li-7`)}</li>
                    <p className="text-base xl:text-xl">{t(`${productsName}.li-7-p`)}</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>

    </section>
  );
};
