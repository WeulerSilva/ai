"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import RawMaterial from "../components/RawMaterial";
import { AboutSpan } from "../components/AboutSpan";

type LogoItem = [string, string];

export default function ProductPage({ searchParams }: { searchParams: { product?: string, banner?: number } }) {
  const t = useTranslations('products');
  const p = useTranslations('product-caracter');
  const product = searchParams?.product;
  const banner = searchParams?.banner;
  const [changeBanner, setChangeBanner] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState(0);
  const [productsName, setProductsName] = useState('adult-sec');
  const [selectedType, setSelectedType] = useState("photo-2");
  const locale = useLocale();

  useEffect(() => {
    if (product) {
      setProductsName(product);
    }
    if (banner) {
      setChangeBanner(Number(banner)); // Converte 'banner' para número
    }
  }, [product, banner]);

  const logos: LogoItem[] = [
    ["bg-logo-1", "adult-sec"],
    ["bg-logo-3", "lady-sec"],
    ["bg-logo-5", "babyfral"],
    ["bg-logo-2", "limpdent"],
    ["bg-logo-4", "petsec"],
    ["bg-logo-6", "ecovida"],
    [`${locale === 'en' ? "bg-logo-9" : "bg-logo-7"}`, "al-mp"]
  ];
  {/*["bg-logo-8", "al-wl"]*/ }


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
    <section className='w-screen h-full flex justify-center items-center flex-col mt-16 lg:mt-16 xl:mt-20'>
      <div className='w-[90%] h-full flex justify-start items-start flex-col lg:w-[80%]'>
        <div className="w-full flex flex-col">
          <h1 className='text-bluedark text-[20px] font-bold mb-2 lg:text-[24px] md:mb-0 lg:mb-4 xl:text-3xl 2xl:mt-10'>
            {t('h1')} <span className='text-laranja'>{t('h1-2')}</span>
            <AboutSpan text={t('more-1')}
              style="hidden bg-bluedark text-laranja ml-10 md:inline md:mr-0 md:mt-4 md:px-4 text-[13px]"
              link="/Contact" />
          </h1>
          <AboutSpan text={t('more-1')}
            style="w-[200px] bg-bluedark text-laranja text-[10px] mb-6 md:hidden"
            link="/Contact" />
        </div>


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
      ${logos[visibleIcons][0]} ${changeBanner === visibleIcons ? '' : 'opacity-60'} hover:opacity-90`}
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
      ${logos[visibleIcons + 1][0]} ${changeBanner === visibleIcons + 1 ? '' : 'opacity-60'} hover:opacity-90`}
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
              className={`w-full h-full cursor-pointer bg-contain bg-no-repeat bg-center 
              ${logo ? logo[0] : ''}
              ${changeBanner === index ? "" : "opacity-50"} hover:opacity-90`}
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
        <div className="w-full h-full bg-[#00679a3d] flex justify-start items-center uppercase text-[11px] text-center font-bold
               text-bluedark md:h-[60px] md:text-[16px] lg:text-base">
          <div className="flex w-full h-full justify-around items-center space-x-2 py-1 flex-col 
           md:flex-row md:space-y-0 md:py-0 md:space-x-8 md:justify-start md:w-full md:ml-[5%]">
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
            {`${productsName}.type-4` &&
              <span onClick={() => handleTypeClick('photo-4')} className={`${selectedType === 'photo-4'
                ? 'border-b-4 border-bluelight text-bluelight' : 'border-b-4 border-transparent'} cursor-pointer`}>
                {t(`${productsName}.type-4`)}
              </span>
            }
            <span onClick={() => handleTypeClick('photo-5')} className={`${selectedType === 'photo-5'
              ? 'border-b-4 border-bluelight text-bluelight' : 'border-b-4 border-transparent'} cursor-pointer`}>
              {t(`${productsName}.type-5`)}
            </span>
            <span onClick={() => handleTypeClick('photo-6')} className={`${selectedType === 'photo-6'
              ? 'border-b-4 border-bluelight text-bluelight' : 'border-b-4 border-transparent'} cursor-pointer`}>
              {t(`${productsName}.type-6`)}
            </span>
            <span onClick={() => handleTypeClick('photo-7')} className={`${selectedType === 'photo-7'
              ? 'border-b-4 border-bluelight text-bluelight' : 'border-b-4 border-transparent'} cursor-pointer`}>
              {t(`${productsName}.type-7`)}
            </span>
            <span onClick={() => handleTypeClick('photo-8')} className={`${selectedType === 'photo-8'
              ? 'border-b-4 border-bluelight text-bluelight' : 'border-b-4 border-transparent'} cursor-pointer`}>
              {t(`${productsName}.type-8`)}
            </span>
          </div>

        </div>
        {/*lg:flex-row lg:h-[1100px] 2xl:h-[1000px]*/}
        <div className="w-full h-full bg-white flex-col flex ">                                      {/*lg:w-[40%]*/}
          <div className="w-full bg-[#00679a27] h-full flex justify-center items-center flex-col">                                              {/* mt-12 md:w-[70%] xl:w-[90%] md:h-[320px] lg:h-[340px]  2xl:h-[530px]*/}
            <div className={`${t(`${productsName}.${selectedType}`)} w-full h-[165px] bg-cover bg-center bg-no-repeat md:w-full md:h-[350px] lg:h-[420px] xl:h-[530px]  2xl:h-[600px]`}>
            </div>

            {(productsName) && (
              <div className="w-[85%] h-full flex flex-col justify-start items-start pt-8 md:w-[85%] lg:w-[70%]">
                <h6 className="text-xl mb-4 font-bold text-bluedark md:text-3xl 2xl:text-4xl">{t('carac-1')} <span className="text-laranja">{t('carac-2')}</span></h6>

                {(productsName === "adult-sec" || productsName === "babyfral" || productsName === "petsec" || productsName === "ecovida"
                  || productsName === "limpdent" || productsName === "al-mp"
                ) &&
                  <>
                    <span className="text-bluedark font-bold text-base md:text-lg">{p(`${productsName}.${selectedType}.l1`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l2`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l3`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l4`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l5`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l6`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l7`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l8`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l9`)}</span>
                  </>
                }

                {productsName === "lady-sec" && selectedType === 'photo-3' &&
                  <>
                    <span className="text-bluedark font-bold text-base md:text-lg">{p(`${productsName}.${selectedType}.l0`)}</span>
                    <span className="text-bluedark font-semibold text-base md:text-lg">{p(`${productsName}.${selectedType}.l1`)}</span>
                    <span className="text-bluedark font-semibold text-base md:text-lg">{p(`${productsName}.${selectedType}.l2`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l3`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l4`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l5`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l6`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l7`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l8`)}</span>
                    <span className="text-bluedark font-bold mt-4 text-base md:text-lg">{p(`${productsName}.${selectedType}.l9`)}</span>
                    <span className="text-bluedark font-semibold text-base md:text-lg">{p(`${productsName}.${selectedType}.l10`)}</span>
                    <span className="text-bluedark font-semibold text-base md:text-lg">{p(`${productsName}.${selectedType}.l2`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l11`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l12`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l13`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l14`)}</span>
                  </>
                }

                {productsName === "lady-sec" && selectedType === 'photo-2' &&
                  <>
                    <span className="text-bluedark font-bold text-base md:text-lg">{p(`${productsName}.${selectedType}.l1`)}</span>
                    <span className="text-bluedark font-semibold text-base md:text-lg">{p(`${productsName}.${selectedType}.l2`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l3`)}</span>

                    <span className="text-bluedark mt-4 text-base font-bold md:text-lg">{p(`${productsName}.${selectedType}.l4`)}</span>
                    <span className="text-bluedark text-base font-semibold md:text-lg">{p(`${productsName}.${selectedType}.l2`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l5`)}</span>

                    <span className="text-bluedark mt-4 text-base font-bold md:text-lg">{p(`${productsName}.${selectedType}.l6`)}</span>
                    <span className="text-bluedark text-base font-semibold md:text-lg">{p(`${productsName}.${selectedType}.l2`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l7`)}</span>

                    <span className="text-bluedark mt-4 text-base font-bold md:text-lg">{p(`${productsName}.${selectedType}.l8`)}</span>
                    <span className="text-bluedark text-base font-semibold md:text-lg">{p(`${productsName}.${selectedType}.l2`)}</span>
                    <span className="text-bluedark text-base md:text-lg">{p(`${productsName}.${selectedType}.l9`)}</span>

                    <span className="text-bluedark mt-4 text-base font-bold md:text-lg">{p(`${productsName}.${selectedType}.l10`)}</span>
                    <span className="text-bluedark text-base font-semibold md:text-lg">{p(`${productsName}.${selectedType}.l11`)}</span>
                  </>
                }

                {productsName === "lady-sec" && selectedType === 'photo-1' &&
                  <>
                    <span className="text-bluedark font-bold text-base md:text-lg">{p(`${productsName}.${selectedType}.l3`)}</span>
                    <span className="text-bluedark text-base">{p(`${productsName}.${selectedType}.l4`)}</span>

                    <br />
                    <span className="text-bluedark font-bold text-base md:text-lg">{p(`${productsName}.${selectedType}.l6`)}</span>
                    <span className="text-bluedark text-base">{p(`${productsName}.${selectedType}.l7`)}</span>
                  </>
                }
              </div>
            )}

            <div className="w-full flex justify-center items-center my-4 flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <a href={`
              ${changeBanner === 0 &&
                "https://online.fliphtml5.com/wiyip/dqyj/"
                ||
                changeBanner === 1 &&
                "https://online.fliphtml5.com/wiyip/edkx/"
                ||
                changeBanner === 2 &&
                "https://online.fliphtml5.com/wiyip/zdby/"
                ||
                changeBanner === 3 &&
                "https://online.fliphtml5.com/gqmqw/prhs/"
                ||
                changeBanner === 4 &&
                "https://online.fliphtml5.com/wiyip/xhhm/"
                ||
                changeBanner === 5 &&
                "https://online.fliphtml5.com/wiyip/hixt/"
                ||
                changeBanner === 6 &&
                "https://online.fliphtml5.com/mtgvx/oljx/#p=1"
                }
            `} target="_blank"
                className="bg-bluedark text-laranja text-[10px] uppercase font-semibold rounded-3xl px-3
                lg:text-[12px] xl:text-[15px]">
                {t('folder')}
              </a>

              <AboutSpan text={t('more')}
                style="bg-bluedark text-laranja mr-6 md:mr-0 text-[12px] lg:text-[16px] xl:text-[15px]"
                link="/Contact" />
            </div>

          </div>

        </div>
      </div>

      <RawMaterial />
    </section>
  );
};
