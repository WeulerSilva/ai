import { useTranslations } from "next-intl";
import YearDiv from "../components/YearDiv";

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
                    <YearDiv year={t('t-y-8')} text={t('t-8')} />
                </div>

            </div>
        </section>
    );
};
