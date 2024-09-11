import { useTranslations } from "next-intl";
import YearDiv from "../components/YearDiv";
import FabricsDivs from "../components/FabricsDivs";

export default function Pages() {
    const t = useTranslations('journey')

    return (
        <section className='w-screen h-full flex justify-center items-center flex-col mt-16 lg:mt-24 xl:mt-24'>
            <div className="w-full h-[60vh] bg-green-200 md:w-[90%] lg:h-[80%]">
                <video src="https://cdn.pixabay.com/video/2022/12/01/141192-777517647_tiny.mp4"
                    controls
                    className="w-full h-full object-cover"
                ></video>
            </div>

            <div className="w-[90%] h-full flex justify-center items-center flex-col mt-4 mb-12 text-[18px] md:w-[80%] xl:text-xl">
                <p><span className="pl-8"></span>A ética orienta nossas ações, garantindo que todas as nossas decisões sejam justas e transparentes. A responsabilidade nos lembra da
                    importância de respondermos pelas nossas ações, sendo conscientes dos impactos que geramos no meio ambiente e na sociedade.</p>

                <h2 className="text-2xl text-bluedark font-bold mt-10 mb-8 xl:text-4xl">Nossa <span className="text-laranja">tragetória</span></h2>

                <p className="mb-6"><span className="pl-8"></span>Enraizada na indústria de higiene pessoal desde 2011, com seis bases de produção na China, a holding ANK HYGIENE tornou-se uma
                    referência internacional em produtos higiênicos descartáveis.
                </p>

                <p className="mb-6"><span className="pl-8"></span>Desde o início, um dos principais focos de mercado foi a América Latina.
                    Com esse objetivo em mente, e após anos de trabalho contínuo, estabelecemos a joint venture ANK ILUMER (A&I); atuando na comercialização
                    de produtos higiênicos descartáveis, maquinas, e matérias-primas para a indústria.</p>

                <p id="test"><span className="pl-8"></span>
                    A&I, se dedica a melhorar a qualidade de vida das pessoas através de produtos inovadores e responsáveis.
                    ILUMER S.A., desde o ano 1986, se dedica à comercialização de produtos higiênicos descartáveis e matérias primas.
                </p>
            </div>

            <div className="w-full h-[500px] bg-laranja/10 flex flex-row justify-start items-center overflow-x-auto lg:justify-center lg:overflow-x-hidden
                    lg:h-[700px] xl:h-[600px] 2xl:h-[500px]">

                <div className="flex justify-start items-center min-w-[427%] md:min-w-[250%] lg:min-w-0 lg:w-[90%]">
                    <YearDiv direction year={t('t-y-1')} text={t('t-1')} />
                    <YearDiv year={t('t-y-2')} text={t('t-2')} />
                    <YearDiv direction year={t('t-y-3')} text={t('t-3')} />
                    <YearDiv year={t('t-y-4')} text={t('t-4')} />
                    <YearDiv direction year={t('t-y-5')} text={t('t-5')} />
                    <YearDiv year={t('t-y-6')} text={t('t-6')} />
                    <YearDiv direction year={t('t-y-7')} text={t('t-7')} />
                    <YearDiv hidden year={t('t-y-8')} text={t('t-8')} />
                </div>

            </div>

            <div className="w-[90%] h-full flex justify-center items-center flex-col mt-4 mb-12 text-[18px] md:w-[80%] xl:text-xl">
                <h2 className="text-2xl text-bluedark font-bold mt-10 mb-8 xl:text-4xl">Conheça <span className="text-laranja">nossas fábricas</span></h2>

                <p className="mb-6"><span className="pl-8"></span>Nosso principal diferencial reside em nossa equipe de profissionais. A excelência na qualidade dos produtos oferecidos é o resultado de um
                    compromisso contínuo com o aprimoramento pessoal; marcado pela seriedade e dedicação.
                </p>

                <p className=""><span className="pl-8"></span>
                    A colaboração é um valor fundamental, pois reconhecemos que juntos somos mais fortes e capazes de alcançar resultados excepcionais. E,
                    finalmente, o comprometimento é o alicerce que sustenta todos esses valores, demonstrando nossa dedicação e esforço contínuo para alcançar
                    nossos objetivos e contribuir para um mundo melhor.
                </p>

                <p id="test" className="w-full">
                    Ao integrar esses princípios em nosso cotidiano, construímos uma base sólida para um futuro próspero e harmonioso.
                </p>

                <h2 className="text-2xl text-bluedark font-bold mt-10 mb-12 xl:text-4xl">Nossas fabricas contam com certificação GMP, livres de poeira.</h2>

                <div className="w-full h-full flex justify-between items-center mb-8 flex-col space-y-6 md:space-y-0 md:flex-row">
                    <FabricsDivs text="Máquinas para a indústria de produtos higiênicos descartáveis." />

                    <FabricsDivs text="Matéria Prima para a indústria de higiênicos descartáveis." />

                    <FabricsDivs text="Produtos descartáveis para a higiene pessoal e para pet." />
                </div>

                <div className="w-full h-full flex justify-between items-center mb-12 flex-col space-y-6 md:space-y-0 md:flex-row">
                    <FabricsDivs text="Fraldas descartávei adulto e infantil." />

                    <FabricsDivs text="Produtos descartáveis para viagem." />

                    <FabricsDivs text="Produtos para o cuidado pessoal." />
                </div>
            </div>


            <div className="w-full h-[600px] flex flex-col justify-center bg-[#AAAAA9]/30 lg:w-[100%] lg:flex-row lg:h-[400px] xl:h-[500px] 2xl:h-[450px]">
                <div className="w-[90%] h-full flex justify-center items-center flex-col lg:w-[80%] lg:flex-row-reverse">
                    <div className="w-full h-full flex justify-center items-start text-2xl font-bold text-bluedark 
                        border-l-[16px] border-laranja md:h-[50%] lg:h-full xl:text-4xl lg:w-[50%]">
                        <div className="w-full pl-10 lg:w-[100%] xl:pl-20">
                            <h1 className="mt-4 text-laranja lg:my-6 xl:my-16">Inovação</h1>
                            <p className="text-[16px] text-gray-700 text-justify pt-4 lg:pt-0 xl:mt-4 xl:text-[20px]">
                                <span className="pl-6"></span>A inovação é um dos pilares fundamentais da nossa
                                empresa. Buscamos constantemente maneiras de melhorar e
                                evoluir. Não se trata apenas de avanços tecnológicos, mas
                                também de inovações em modelos de negócios, práticas de
                                gestão, estratégias de marketing e até mesmo em nossa cultura
                                organizacional.</p>
                        </div>

                    </div>

                    <div className="w-full h-[50%] flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row lg:h-full lg:w-[50%]">
                        <div className="w-full h-full bg-inovation bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-left bg-green-200"></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[600px] flex flex-col justify-center bg-[#93C248]/30 lg:w-[100%] lg:flex-row lg:h-[400px] xl:h-[500px] 2xl:h-[450px]">
                <div className="w-[90%] h-full flex justify-center items-center flex-col lg:w-[80%] lg:flex-row">
                    <div className="w-full h-full flex justify-start items-start text-2xl font-bold text-bluedark 
                        border-l-[16px] border-laranja  md:h-[50%] lg:border-none lg:h-full xl:text-4xl lg:justify-center lg:w-[50%]">
                        <div className="w-full pl-10 lg:pl-0 lg:pr-10 lg:border-none lg:w-[100%] xl:pr-20">
                            <h1 className="mt-4 text-[#356A2D] lg:my-6 xl:my-16">Sustentabilidade</h1>
                            <p className="text-[16px] text-gray-700 text-justify pt-4 lg:pt-0 xl:mt-4 xl:text-[20px]">
                                <span className="pl-6"></span>Estamos comprometidos com a preservação dos recursos
                                naturais para as futuras gerações, adotando práticas que
                                minimizem o impacto ambiental. A busca pela qualidade em tudo
                                o que fazemos assegura a entrega de produtos e serviços que
                                atendam ou superem as expectativas dos nossos clientes.</p>
                        </div>

                    </div>

                    <div className="w-full h-[50%] flex flex-col space-y-2 lg:border-l-[16px] border-laranja md:space-y-0 md:space-x-2 md:flex-row lg:h-full lg:w-[50%]">
                        <div className="w-full h-full bg-sustentability bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-left bg-green-200"></div>
                    </div>
                </div>
            </div>

            <div className="w-[80%] h-full text-base font-bold text-bluedark text-center py-10 xl:text-xl 2xl:text-3xl">
                <h4>A inovação é um fator crucial para a sustentabilidade. Estamos comprometidos em desenvolver soluções que
                otimizem o uso de recursos naturais, reduzam o impacto ambiental e promovam o bem-estar social.</h4>
            </div>
        </section>
    );
};
