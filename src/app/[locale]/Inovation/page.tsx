"use client"

import { useTranslations } from "next-intl";
import YearDiv from "../components/YearDiv";
import FabricsDivs from "../components/FabricsDivs";
import { useState } from "react";
import FabricsModal from "../components/FabricsModal";

export default function Pages() {
    const t = useTranslations('journey');
    const h = useTranslations('modal');

    const [isVisible, setIsVisible] = useState(false);
    const [modalContent, setModalContent] = useState<{ factory: string; title: string; text: string; textTwo: string; imgOne: string; imgTwo: string; imgThree: string; imgFour: string; li1: string; li2: string; li3: string; li4: string; li5: string; li6: string; li7: string; li8: string; li9: string; li10: string; li11: string; li12: string; li13: string }>({
        factory: '',
        title: '',
        text: '',
        textTwo: '',
        imgOne: '',
        imgTwo: '',
        imgThree: '',
        imgFour: '',
        li1: '',
        li2: '',
        li3: '',
        li4: '',
        li5: '',
        li6: '',
        li7: '',
        li8: '',
        li9: '',
        li10: '',
        li11: '',
        li12: '',
        li13: '',
    });

    // Função para abrir o modal
    const openModal = (factory: string, title: string, text: string, textTwo: string, imgOne: string, imgTwo: string, imgThree: string, imgFour: string, li1: string, li2: string, li3: string, li4: string, li5: string, li6: string, li7: string, li8: string, li9: string, li10: string, li11: string, li12: string, li13: string) => {
        setModalContent({ factory, title, text, textTwo, imgOne, imgTwo, imgThree, imgFour, li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12, li13 });
        setIsVisible(true);
    };

    return (
        <section className='w-screen h-full flex justify-center items-center flex-col mt-16 lg:mt-14 xl:mt-24'>
            <FabricsModal
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                content={modalContent}
            />

            <div className="w-full h-[60vh] bg-green-200 md:w-[90%] lg:h-[80%]">
                <video src="https://cdn.pixabay.com/video/2022/12/01/141192-777517647_tiny.mp4"
                    controls
                    className="w-full h-full object-cover"
                    playsInline
                ></video>
            </div>

            <div className="w-[90%] h-full text-justify flex justify-center items-start flex-col mt-4 mb-12 text-[18px] md:w-[80%] xl:text-xl">
                <p><span className="pl-8"></span>
                    {t('p1')}
                </p>

                <h2 className="w-full text-center text-2xl text-bluedark font-bold mt-10 mb-8 xl:text-3xl">{t('our-1')} <span className="text-laranja">{t('our-2')}</span></h2>

                <p className="mb-6"><span className="pl-8"></span>{t('p2')}
                </p>

                <p className="mb-6"><span className="pl-8"></span>{t('p2-1')}
                </p>

                <p className="mb-6"><span className="pl-8"></span>
                    {t('p3')}
                </p>

                <p id="test"><span className="pl-8"></span>
                    {t('p4')}
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

            <div className="w-[90%] h-full flex justify-center items-center text-justify flex-col mt-4 mb-12 text-[18px] md:w-[80%] xl:text-xl">
                <h2 className="text-2xl text-bluedark font-bold mt-10 mb-8 xl:text-3xl">{t('our-3')} <span className="text-laranja">{t('our-4')}</span></h2>

                <p className="mb-6"><span className="pl-8"></span>
                    {t('p5')}
                </p>

                <p className=""><span className="pl-8"></span>
                    {t('p6')}
                </p>

                <p id="test" className="w-full">
                    {t('p7')}
                </p>

                <h2 className="text-2xl text-bluedark font-bold mt-10 mb-12 xl:text-4xl">
                    {t('modal-h1')}
                </h2>

                <div className="w-full h-full flex justify-between items-center mb-8 flex-col space-y-6 md:space-y-0 md:flex-row">
                    <FabricsDivs onClick={() =>
                        openModal(
                            h('f1-name'),
                            'Máquinas',
                            h('f1-l1'),
                            h('f1-l2'),
                            'bg-fachada1',
                            'bg-machine1',
                            'bg-prod1',
                            'bg-emb1',
                            h('f1-l3'),
                            h('f1-l4'),
                            h('f1-l5'),
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        )}
                        text={t('modal-1')}
                        image="bg-fachada1" />

                    <FabricsDivs onClick={() =>
                        openModal(
                            h('f2-name'),
                            'Máquinas',
                            '',
                            '',
                            'bg-fachada2',
                            'bg-machine2',
                            'bg-prod2',
                            'bg-emb2',
                            h('f2-l1'),
                            h('f2-l2'),
                            '',
                            h('f2-l3'),
                            h('f2-l4'),
                            h('f2-l5'),
                            h('f2-l6'),
                            h('f2-l7'),
                            h('f2-l8'),
                            h('f2-l9'),
                            '',
                            '',
                            ''
                        )}
                        text={t('modal-2')}
                        image="bg-fachada2" />

                    <FabricsDivs onClick={() =>
                        openModal(
                            h('f3-name'),
                            'Máquinas',
                            '',
                            '',
                            'bg-fachada3',
                            'bg-machine3',
                            'bg-prod3',
                            'bg-emb3',
                            h('f3-l1'),
                            h('f3-l2'),
                            h('f3-l3'),
                            h('f3-l4'),
                            h('f3-l5'),
                            h('f3-l6'),
                            h('f3-l7'),
                            h('f3-l8'),
                            '',
                            '',
                            '',
                            '',
                            ''
                        )}
                        text={t('modal-3')}
                        image="bg-fachada3" />
                </div>

                <div className="w-full h-full flex justify-between items-center mb-12 flex-col space-y-6 md:space-y-0 md:flex-row">
                    <FabricsDivs onClick={() =>
                        openModal(
                            h('f4-name'),
                            'Máquinas',
                            '',
                            '',
                            'bg-fachada4',
                            'bg-machine4',
                            'bg-prod4',
                            'bg-emb4',
                            h('f4-l1'),
                            h('f4-l2'),
                            h('f4-l14'),
                            h('f4-l3'),
                            h('f4-l5'),
                            h('f4-l6'),
                            h('f4-l7'),
                            h('f4-l8'),
                            h('f4-l9'),
                            h('f4-l10'),
                            h('f4-l11'),
                            h('f4-l12'),
                            h('f4-l13')
                        )}
                        text={t('modal-4')}
                        image="bg-fachada4" />

                    <FabricsDivs onClick={() =>
                        openModal(
                            h('f5-name'),
                            'Máquinas',
                            '',
                            '',
                            'bg-fachada5',
                            'bg-machine5',
                            'bg-prod5',
                            'bg-emb5',
                            h('f5-l1'),
                            h('f5-l2'),
                            h('f5-l3'),
                            h('f5-l4'),
                            h('f5-l5'),
                            h('f5-l6'),
                            h('f5-l7'),
                            h('f5-l8'),
                            h('f5-l9'),
                            h('f5-l10'),
                            '',
                            '',
                            ''
                        )}
                        text={t('modal-5')}
                        image="bg-emb4" />

                    <FabricsDivs onClick={() =>
                        openModal(
                            h('f6-name'),
                            'Máquinas',
                            '',
                            '',
                            'bg-fachada6',
                            'bg-machine5',
                            'bg-prod6',
                            'bg-emb6',
                            h('f6-l1'),
                            h('f6-l2'),
                            h('f6-l3'),
                            h('f6-l4'),
                            h('f6-l5'),
                            h('f6-l6'),
                            h('f6-l7'),
                            h('f6-l8'),
                            h('f6-l9'),
                            '',
                            '',
                            '',
                            ''
                        )}
                        text={t('modal-6')}
                        image="bg-emb1" />
                </div>
            </div>


            <div className="w-full h-[600px] flex flex-col justify-center bg-[#AAAAA9]/30 lg:w-[100%] lg:flex-row lg:h-[400px] xl:h-[500px] 2xl:h-[450px]">
                <div id="Inovation" className="w-[90%] h-full flex justify-center items-center flex-col lg:w-[80%] lg:flex-row-reverse">
                    <div className="w-full h-full flex justify-center items-start text-2xl text-bluedark 
                        border-l-[16px] border-laranja md:h-[50%] lg:h-full xl:text-2xl lg:w-[50%] 2xl:text-3xl">
                        <div className="w-full pl-10 lg:w-[100%] xl:pl-20">
                            <h1 className="mt-4 text-laranja lg:my-6 xl:my-16">{t('inov')}</h1>
                            <p className="text-[16px] text-gray-700 text-justify pt-4 md:leading-8 lg:pt-0 xl:mt-4 xl:text-base 2xl:text-lg">
                                <span className="pl-6"></span>
                                {t('inov-p')}
                            </p>
                        </div>

                    </div>

                    <div className="w-full h-[50%] flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row lg:h-full lg:w-[50%]">
                        <div className="w-full h-full bg-inovation bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-left bg-green-200 xl:bg-left"></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[600px] flex flex-col justify-center bg-[#93C248]/30 lg:w-[100%] lg:flex-row lg:h-[400px] xl:h-[500px] 2xl:h-[450px]">
                <div id="sust" className="w-[90%] h-full flex justify-center items-center flex-col lg:w-[80%] lg:flex-row">
                    <div className="w-full h-full flex justify-start items-start text-2xl text-bluedark 
                        border-l-[16px] border-laranja  md:h-[50%] lg:border-none lg:h-full lg:justify-center lg:w-[50%] xl:text-2xl 2xl:text-3xl">
                        <div className="w-full pl-10 lg:pl-0 lg:pr-10 lg:border-none lg:w-[100%] xl:pr-20">
                            <h1 className="mt-4 text-[#356A2D] lg:my-6 xl:my-16">{t('susten')}</h1>
                            <p className="text-[16px] text-gray-700 text-justify pt-4 md:leading-8  lg:pt-0 xl:mt-4 xl:text-base 2xl:text-lg">
                                <span className="pl-6"></span>
                                {t('susten-p')}
                            </p>
                        </div>

                    </div>

                    <div className="w-full h-[50%] flex flex-col space-y-2 lg:border-l-[16px] border-laranja md:space-y-0 md:space-x-2 md:flex-row lg:h-full lg:w-[50%]">
                        <div className="w-full h-full bg-sustentability bg-cover bg-center bg-no-repeat md:bg-cover lg:bg-center bg-green-200"></div>
                    </div>
                </div>
            </div>

            <div className="w-[80%] h-full text-base text-bluedark text-center py-10 xl:text-lg 2xl:text-xl">
                <h4>
                    {t('end')}
                </h4>
            </div>
        </section>
    );
};
