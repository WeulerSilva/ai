"use client"

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import JuridicModal from "./JuridicModal";



export const Footer = () => {
    const [expandedSections, setExpandedSections] = useState([false, false, false, false]);
    const t = useTranslations('HomePage');
    const h = useTranslations('footer');
    const p = useTranslations('politics');
    const r = useLocale();

    const toggleExpand = (index: number) => {
        // Alterna o estado da seção clicada
        setExpandedSections((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index]; // Alterna a seção com base no índice
            return newState;
        });
    };

    const [isVisible, setIsVisible] = useState(false);
    const [modalContent, setModalContent] = useState<{ title: string; li1: string; li2: string; li3: string; li4: string; li5: string; li6: string; li7: string; li8: string; li9: string; li10: string; li11: string; li12: string; li13: string; li14: string; li15: string; li16: string }>({
        title: '',
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
        li14: '',
        li15: '',
        li16: ''
    });

    // Função para abrir o modal
    const openModal = (title: string, li1: string, li2: string, li3: string, li4: string, li5: string, li6: string, li7: string, li8: string, li9: string, li10: string, li11: string, li12: string, li13: string, li14: string, li15: string, li16: string) => {
        setModalContent({ title, li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12, li13, li14, li15, li16 });
        setIsVisible(true);
    };

    return (
        <footer className="w-screen h-full bg-laranja flex justify-center items-center flex-col lg:h-[300px] xl:h-[250px]" id="contact">
            <JuridicModal
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                content={modalContent}
            />

            <div className="w-full h-full flex justify-center items-center flex-col mb-6 md:w-[80%] md:mb-0 lg:justify-between lg:flex-row">
                <Link href={'/'} className="flex justify-items-center items-center mt-6 lg:mt-0 md:pr-10" title="Home">
                    <div className="w-[80px] h-[80px] bg-logo bg-contain bg-no-repeat bg-top lg:w-[150px] lg:h-[150px]"></div>
                </Link>

                <div className=" hidden w-full h-full justify-center font-bold uppercase items-center text-bluedark
                     mt-6 md:mt-12 xl:mt-0 lg:flex lg:space-x-4">
                    <div className="w-full h-[50%] flex justify-between items-start text-[17px]">
                        <div className="flex flex-col text-white">
                            <span>{h('l1')}</span>
                            <ul className="text-bluedark text-[12px] xl:text-[14px]">
                                <Link href={`/${r}/Contact`}><li>{h('li-1')}</li></Link>
                                <Link href={`/${r}/Contact`}><li>{h('li-2')}</li></Link>
                            </ul>
                        </div>

                        <div className="flex flex-col text-white">
                            <span>{h('l2')}</span>
                            <ul className="text-bluedark text-[12px] xl:text-[14px]">
                                <Link href={`/${r}/Inovation`}><li>{h('l2-1')}</li></Link>
                                <Link href={`/${r}/Inovation#Inovation`}><li>{h('l2-2')}</li></Link>
                                <Link href={`/${r}/Inovation#sust`}><li>{h('l2-3')}</li></Link>
                                <Link href={`/${r}/Products#cert`}><li>{h('l2-4')}</li></Link>
                            </ul>
                        </div>

                        <div className="flex flex-col text-white">
                            <span>{h('l3')}</span>
                            <div className="flex justify-center items-start text-bluedark text-[12px] flex-col 
                                xl:text-[14px] xl:space-x-8 xl:flex-row">
                                <ul>
                                    <Link href={`/${r}/Products?product=limpdent&banner=3`}><li>{h('l3-1')}</li></Link>
                                    <Link href={`/${r}/Products?product=babyfral&banner=2`}><li>{h('l3-2')}</li></Link>
                                    <Link href={`/${r}/Products?product=lady-sec&banner=1`}><li>{h('l3-3')}</li></Link>
                                    <Link href={`/${r}/Products?product=adult-sec&banner=0`}><li>{h('l3-4')}</li></Link>
                                </ul>
                                <ul>
                                    <Link href={`/${r}/Products?product=petsec&banner=4`}><li>{h('l3-5')}</li></Link>
                                    <Link href={`/${r}/Products?product=ecovida&banner=5`}><li>{h('l3-6')}</li></Link>
                                    <Link href={`/${r}/Products#raw`}><li>{h('l3-7')}</li></Link>
                                    <Link href={`/${r}/Products`}><li>White Label</li></Link>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col text-white">
                            <span>{h('l4')}</span>
                            <ul className="text-bluedark text-[12px] xl:text-[14px]">
                                <li
                                    onClick={() =>
                                        openModal(
                                            p('p1-name-1'),
                                            p('p1-name-2'),
                                            p('p1-1'),
                                            p('p1-2'),
                                            p('p1-3'),
                                            p('p1-4'),
                                            p('p1-5'),
                                            p('p1-name-3'),
                                            p('p1-6'),
                                            p('p1-7'),
                                            p('p1-name-4'),
                                            p('p1-8'),
                                            p('p1-9'),
                                            p('p1-10'),
                                            p('p1-11'),
                                            p('p1-12'),
                                            p('')
                                        )}
                                >{h('l4-1')}</li>

                                <li
                                    onClick={() =>
                                        openModal(
                                            p('t1-name-1'),
                                            p('t1-name-2'),
                                            p('t1-1'),
                                            p('t1-2'),
                                            p('t1-3'),
                                            p('t1-4'),
                                            p('t1-5'),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p('t1-name-3'),
                                        )}
                                >{h('l4-2')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*Divs mobile */}

            <div className="w-full h-full flex flex-col justify-center items-center text-white lg:hidden">
                <div className="w-[90%] h-full flex flex-col justify-center font-bold uppercase items-center space-y-4 text-bluedark 
                    mb-6 md:mt-12">

                    {/* Seção Distribuidores */}
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(0)}>
                            <span>{h('l1')}</span>
                            <span className="text-2xl">{expandedSections[0] ? "v" : ">"}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[0] ? "h-[44px]" : "h-[0px]"} 
                            border-b-2 border-bluedark`}>
                            <ul className="text-white text-[13px] font-semibold">
                                <Link href={`/${r}/Contact`}><li>{h('li-1')}</li></Link>
                                <Link href={`/${r}/Contact`}><li>{h('li-2')}</li></Link>
                            </ul>
                        </div>
                    </div>

                    {/* Seção Sobre */}
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(1)}>
                            <span>{h('l2')}</span>
                            <span className="text-2xl">{expandedSections[1] ? "v" : ">"}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[1] ? "h-[83px]" : "h-[0px]"}
                            border-b-2 border-bluedark`}>
                            <ul className="text-white text-[13px]">
                                <Link href={`/${r}/Inovation`}><li>{h('l2-1')}</li></Link>
                                <Link href={`/${r}/Inovation#Inovation`}><li>{h('l2-2')}</li></Link>
                                <Link href={`/${r}/Inovation#sust`}><li>{h('l2-3')}</li></Link>
                                <Link href={`/${r}/Products#cert`}><li>{h('l2-4')}</li></Link>
                            </ul>
                        </div>
                    </div>

                    {/* Seção Produtos */}
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(2)}>
                            <span>{h('l3')}</span>
                            <span className="text-2xl">{expandedSections[2] ? "v" : ">"}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[2] ? "h-[162px]" : "h-[0px]"}
                            border-b-2 border-bluedark`}>
                            <div className="flex justify-center items-start text-white text-[13px] flex-col">
                                <ul>
                                    <Link href={`/${r}/Products?product=limpdent&banner=3`}><li>{h('l3-1')}</li></Link>
                                    <Link href={`/${r}/Products?product=babyfral&banner=2`}><li>{h('l3-2')}</li></Link>
                                    <Link href={`/${r}/Products?product=lady-sec&banner=1`}><li>{h('l3-3')}</li></Link>
                                    <Link href={`/${r}/Products?product=adult-sec&banner=0`}><li>{h('l3-4')}</li></Link>
                                </ul>
                                <ul>
                                    <Link href={`/${r}/Products?product=petsec&banner=4`}><li>{h('l3-5')}</li></Link>
                                    <Link href={`/${r}/Products?product=ecovida&banner=5`}><li>{h('l3-6')}</li></Link>
                                    <Link href={`/${r}/Products#raw`}><li>{h('l3-7')}</li></Link>
                                    <Link href={`/${r}/Products`}><li>White Label</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Seção Jurídico */}
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(3)}>
                            <span>{h('l4')}</span>
                            <span className="text-2xl">{expandedSections[3] ? "v" : ">"}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[3] ? "h-[46px]" : "h-[0px]"}
                            border-b-2 border-bluedark`}>
                            <ul className="text-white text-[13px]">
                                <li className="cursor-pointer"
                                    onClick={() =>
                                        openModal(
                                            p('p1-name-1'),
                                            p('p1-name-2'),
                                            p('p1-1'),
                                            p('p1-2'),
                                            p('p1-3'),
                                            p('p1-4'),
                                            p('p1-5'),
                                            p('p1-name-3'),
                                            p('p1-6'),
                                            p('p1-7'),
                                            p('p1-name-4'),
                                            p('p1-8'),
                                            p('p1-9'),
                                            p('p1-10'),
                                            p('p1-11'),
                                            p('p1-12'),
                                            p('')
                                        )}
                                >{h('l4-1')}</li>

                                <li className="cursor-pointer"
                                    onClick={() =>
                                        openModal(
                                            p('t1-name-1'),
                                            p('t1-name-2'),
                                            p('t1-1'),
                                            p('t1-2'),
                                            p('t1-3'),
                                            p('t1-4'),
                                            p('t1-5'),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p(''),
                                            p('t1-name-3'),
                                        )}
                                >{h('l4-2')}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <a className='bg-bluedark font-arial text-center w-screen flex justify-center items-center text-[14px] text-white'
                href="https://www.wbusiness.com.br/"
                target="_blank"
                title="WBusiness">
                {t("desc")}
            </a>
        </footer>
    );
};
