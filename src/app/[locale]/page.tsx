"use client"

import { FirstHomeCarrosel } from './components/FirstHomeCarrosel';
import { AboutSpan } from './components/AboutSpan';
import { SecondHomeCarrosel } from './components/SecondHomecarrosel';
import { useTranslations } from 'use-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';


export default function HomePage() {
  const t = useTranslations('HomePage');
  const r = useLocale();


  return (
    <>
      <FirstHomeCarrosel />

      <section className='w-screen h-full flex justify-start items-center flex-col relative mt-4 mb-10 md:mt-14'>
        <div className='w-full flex justify-center items-start flex-col md:w-[80%] md:flex-row z-20'>
          <div className='w-full h-full flex justify-start flex-col md:w-[70%]'>
            <div className='w-full h-[56px] flex justify-between items-center md:w-[90%]'>
              <h6 className='text-[22px] font-semibold text-bluedark pl-6 uppercase font-conthrax md:pl-0 md:text-md lg:text-2xl xl:text-5xl'>
                ANK & ILUMER
              </h6>
              <AboutSpan link='/Journey' style='bg-bluedark text-laranja mr-6 md:mr-0 text-[12px] lg:text-[16px] xl:text-lg' />
            </div>

            <div className='w-full h-[6px] bg-laranja xl:mt-2'></div>

            <p className='w-full mt-4 px-6 text-bluedark text-justify font-nexa md:text-[16px] md:w-[90%] md:px-0 md:mt-6 xl:text-[20px]'>
              <span className='md:pr-4 lg:pr-6 xl:pr-12'></span>
              {t('ank-p')}
            </p>
          </div>

          <div className='w-full h-[380px] flex justify-center mt-10 bg-home-build bg-cover bg-top bg-no-repeat md:w-[55%] md:mt-0 md:justify-end
            md:rounded-3xl lg:h-[350px] 2xl:h-[380px]'>
          </div>
        </div>
      </section>

      <SecondHomeCarrosel />

      <div className='hidden w-screen justify-center items-center h-[1px] z-30 relative md:flex 3xl:hidden'>
        <div className='w-[90%] h-[0px] bg-green-300 relative'>
          <div className='w-[30px] h-[920px] absolute bg-laranja top-[-150px] right-0 xl:w-[60px]'></div>
        </div>
      </div>

      <section className='w-screen h-full flex justify-start items-center flex-col relative mt-14 mb-10'>
        <div className='w-full h-full flex justify-center items-start flex-col md:w-[80%] md:flex-row z-20'>
          <div className='w-full h-full flex justify-start flex-col md:w-[70%]'>
            <div className='w-full h-[36px] flex justify-between items-start lg:h-[56px] md:w-[90%]'>
              <h6 className='flex text-[22px] font-bold text-bluedark pl-6 uppercase font-conthrax md:mt-2 md:pl-0 md:text-md lg:text-2xl xl:text-3xl'>
                {/*{t('raw-1')} <br />*/}{t("raw-3")}<span className='text-laranja flex items-end'>{t('raw-2')}  <div className='hidden w-[1px] h-[1px] bg-black relative md:block'>
                  <div className='absolute left-4 bottom-[6px] w-[80px] bg-black h-[4px] md:w-[50vw]'></div></div></span>
              </h6>

              <Link href={`/${r}/Products?product=al-mp&banner=6`}
                className='mr-6 bg-bluedark text-laranja font-conthrax px-3 h-fit text-[12px] font-semibold rounded-xl uppercase cursor-pointer
                  md:mr-0 lg:text-[16px] xl:text-lg'
              >{t('more')}</Link>
            </div>

            <p className='w-full mt-4 px-6 text-bluedark text-justify font-nexa md:text-[16px] md:w-[90%] md:px-0 md:mt-6 xl:text-[20px]'>
              <span className='md:pr-4 lg:pr-6 xl:pr-12'></span>
              {t('raw-p1')}
              <br />
              <span className='md:pr-4 lg:pr-6 xl:pr-12'></span>
              {t('raw-p2')}
            </p>
          </div>

          <div className='w-full h-[250px] flex justify-center relative mt-10 md:w-[55%] md:mb-6 md:mt-0 md:justify-end
            md:rounded-3xl md:h-[380px] lg:h-[300px] 2xl:h-[300px]'>
            <div className='w-full h-[90%] absolute bg-bag bg-contain bg-top bg-no-repeat md:top-[-80px]
                md:h-[70%] lg:h-[100%] xl:h-[100%] 2xl:h-[120%] 2xl:top-[-120px]'></div>
          </div>

        </div>
      </section>



      <div className='w-screen h-[350px] flex justify-center items-end relative z-50 mb-16 md:mt-16 md:bg-center md:h-[400px] 
          lg:h-[350px] xl:h-[450px]'>
        <div className='w-full h-full flex justify-start items-end flex-col md:w-[90%]'>
          <div className='w-full h-full bg-[#F0F0F0] flex justify-center items-center flex-col-reverse md:flex-row md:w-[95%] md:rounded-s-[90px]'>
            <div className='w-full h-full bg-box-brand bg-contain bg-bottom bg-no-repeat md:bg-center lg:bg-bottom md:w-[60%]'></div>
            <div className='w-full h-full md:mr-[30px] md:w-[40%] xl:mr-[60px]'>

              <div className='w-full h-full flex justify-end items-end flex-col'>
                <div className='w-full h-[56px] flex justify-between items-center md:w-[90%]'>
                  <h6 className='text-[22px] font-semibold text-bluedark pl-6 font-conthrax md:pl-0 md:text-md lg:text-2xl xl:text-4xl'>
                    {t('white-1')} <span className='text-laranja'>{t('white-2')}</span>
                  </h6>
                </div>

                <p id='wl' className='w-full mt-4 px-6 text-bluedark text-justify tracking-[-1px] font-nexa font-medium md:px-0 md:mt-6 
                  md:text-[16px] md:w-[90%] md:mb-[30px] xl:text-[20px]'>
                  <span className='md:pr-4 lg:pr-6 xl:pr-12'></span>
                  {t('white-p')}
                </p>

                <div className='w-full flex items-center justify-center md:justify-end md:items-end'>
                  <AboutSpan text={t('more-sec')}
                  style='bg-bluedark text-laranja mt-4 md:mt-0 md:mb-6 text-[10px] lg:text-[12px] xl:text-[15px]'
                  link='/Contact'/>
                </div>
                
              </div>


            </div>
          </div>
        </div>

      </div>
    </>
  );
}