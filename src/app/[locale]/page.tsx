import { useTranslations } from 'next-intl';
import { FirstHomeCarrosel } from './components/FirstHomeCarrosel';
import { AboutSpan } from './components/AboutSpan';
import { SecondHomeCarrosel } from './components/SecondHomecarrosel';


export default function HomePage() {

  return (
    <>
      <FirstHomeCarrosel />

      <section className='w-screen h-full flex justify-start items-center flex-col relative mt-14 mb-10'>
        <div className='w-full flex justify-center items-start flex-col md:w-[80%] md:flex-row z-20'>
          <div className='w-full h-full flex justify-start flex-col md:w-[70%]'>
            <div className='w-full h-[56px] flex justify-between items-center md:w-[90%]'>
              <h6 className='text-[22px] font-semibold text-bluedark pl-6 uppercase font-conthrax md:pl-0 md:text-md lg:text-2xl xl:text-5xl'>
                ANK & ILUMER
              </h6>
              <AboutSpan link='/About' text='Ver Mais' style='bg-bluedark text-laranja mr-6 md:mr-0 text-[12px] lg:text-[16px] xl:text-lg' />
            </div>

            <div className='w-full h-[6px] bg-laranja xl:mt-2'></div>

            <p className='w-full mt-4 px-6 text-bluedark text-justify font-nexa md:text-[16px] md:w-[90%] md:px-0 md:mt-6 xl:text-[20px]'>
              <span className='md:pr-4 lg:pr-6 xl:pr-12'></span>Em um mundo cada vez mais interconectado e dinâmico, os valores
              de ética, responsabilidade e sustentabilidade se tornam essenciais para
              nosso sucesso. A ética orienta nossas ações, garantindo que todas as
              nossas decisões sejam justas e transparentes.
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
            <div className='w-full h-[56px] flex justify-between items-start md:w-[90%]'>
              <h6 className='text-[22px] font-bold text-bluedark pl-6 uppercase font-conthrax md:pl-0 md:text-md lg:text-2xl xl:text-3xl'>
                Fornecimento de <br /> <span className='text-laranja flex items-end'>Matéria-Prima <div className='w-[1px] h-[1px] bg-black relative'>
                  <div className='absolute left-4 bottom-[6px] w-[80px] bg-black h-[4px] md:w-[50vw]'></div></div></span>
              </h6>
              <AboutSpan link='/About' text='Ver Mais' style='bg-bluedark text-laranja mr-6 md:mr-0 text-[12px] lg:text-[16px] xl:text-lg' />
            </div>

            <p className='w-full mt-4 px-6 text-bluedark text-justify font-nexa md:text-[16px] md:w-[90%] md:px-0 md:mt-6 xl:text-[20px]'>
              <span className='md:pr-4 lg:pr-6 xl:pr-12'></span>Na ANK&ILUMER, estamos comprometidos em fornecer matérias-primas
              de alta qualidade a um preço justo para a indústria de higiene e cuidado
              pessoal. Nossas matérias-primas variam desde polímeros super absorventes
              até fibras inovadoras como viscose e bambu.<br />
              <span className='md:pr-4 lg:pr-6 xl:pr-12'></span>Esta diversidade de materiais nos permite criar produtos que não apenas
              atendem, mas superam as expectativas de nossos clientes em termos de
              conforto, tecnologia, eficiência e respeito ao meio ambiente.
            </p>
          </div>

          <div className='w-full h-[380px] flex justify-center relative mt-10 md:w-[55%] md:mt-0 md:justify-end
            md:rounded-3xl lg:h-[350px] 2xl:h-[380px]'>
            <div className='w-full h-[90%] absolute bg-bag bg-cover bg-top bg-no-repeat md:top-[-80px]
                md:h-[70%] lg:h-[100%] xl:h-[120%] 2xl:h-[140%] 2xl:top-[-120px]'></div>
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
                    White <span className='text-laranja'>Label</span>
                  </h6>
                  <AboutSpan link='/About' text='Ver Mais' style='bg-bluedark text-laranja mr-6 md:mr-0 text-[12px] lg:text-[16px] xl:text-lg' />
                </div>

                <p className='w-full mt-4 px-6 text-bluedark text-justify font-nexa font-medium md:px-0 md:mt-6 
                  md:text-[16px] md:w-[90%] md:mb-[30px] xl:text-[20px]'>
                  <span className='md:pr-4 lg:pr-6 xl:pr-12'></span>ANK&ILUMER oferece serviços de white label,
                  permitindo que outras empresas vendam seus produtos
                  sob suas próprias marcas, o que inclui uma gama
                  completa de produtos de cuidado pessoal.
                </p>
              </div>


            </div>
          </div>
        </div>

      </div>
    </>
  );
}