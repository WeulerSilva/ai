"use client"

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";



export const Footer = () => {
    const [expandedSections, setExpandedSections] = useState([false, false, false, false]);
    const t = useTranslations('HomePage');

    const toggleExpand = (index:number) => {
        // Alterna o estado da seção clicada
        setExpandedSections((prev) => {
          const newState = [...prev];
          newState[index] = !newState[index]; // Alterna a seção com base no índice
          return newState;
        });
      };

    return (
        <footer className="w-screen h-full bg-laranja flex justify-center items-center flex-col lg:h-[300px] xl:h-[250px]" id="contact">
            <div className="w-full h-full flex justify-center items-center flex-col mb-6 md:w-[80%] md:mb-0 lg:justify-between lg:flex-row">
                <Link href={'/'} className="flex justify-items-center items-center mt-6 lg:mt-0 md:pr-10" title="Home">
                    <div className="w-[80px] h-[80px] bg-logo bg-contain bg-no-repeat bg-top lg:w-[150px] lg:h-[150px]"></div>
                </Link>

                <div className=" hidden w-full h-full justify-center font-bold uppercase items-center text-bluedark
                     mt-6 md:mt-12 xl:mt-0 lg:flex lg:space-x-4">
                    <div className="w-full h-[50%] flex justify-between items-start text-[17px]">
                        <div className="flex flex-col text-white">
                            <span>Distribuidores</span>
                            <ul className="text-bluedark text-[12px] xl:text-[14px]">
                                <li>Seja um Distribuido</li>
                                <li>Contato</li>
                            </ul>
                        </div>

                        <div className="flex flex-col text-white">
                            <span>Sobre</span>
                            <ul className="text-bluedark text-[12px] xl:text-[14px]">
                                <li>ANK & ILUMER</li>
                                <li>Inovação</li>
                                <li>Sustentabilidade</li>
                                <li>Certificação</li>
                            </ul>
                        </div>

                        <div className="flex flex-col text-white">
                            <span>Produtos</span>
                            <div className="flex justify-center items-start text-bluedark text-[12px] flex-col 
                                xl:text-[14px] xl:space-x-8 xl:flex-row">
                                <ul>
                                    <li>Cuidado e higiene pessoal</li>
                                    <li>Cuidado para os bebes</li>
                                    <li>Cuidado feminino</li>
                                    <li>Cuidado para adultos</li>
                                </ul>
                                <ul>
                                    <li>Cuidados para pets</li>
                                    <li>Linha biodegradável</li>
                                    <li>Materia-prima</li>
                                    <li>White Label</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col text-white">
                            <span>JURÍDICO</span>
                            <ul className="text-bluedark text-[12px] xl:text-[14px]">
                                <li>Política de privacidade</li>
                                <li>Termos e condições</li>
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
                            <span>Distribuidores</span>
                            <span className="text-2xl">{expandedSections[0] ? "v" : ">"}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[0] ? "h-[44px]" : "h-[0px]"} 
                            border-b-2 border-bluedark`}>
                            <ul className="text-white text-[13px] font-semibold">
                                <li>Seja um Distribuidor</li>
                                <li>Contato</li>
                            </ul>
                        </div>
                    </div>

                    {/* Seção Sobre */}
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(1)}>
                            <span>Sobre</span>
                            <span className="text-2xl">{expandedSections[1] ? "v" : ">"}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[1] ? "h-[83px]" : "h-[0px]"}
                            border-b-2 border-bluedark`}>
                            <ul className="text-white text-[13px]">
                                <li>ANK & ILUMER</li>
                                <li>Inovação</li>
                                <li>Sustentabilidade</li>
                                <li>Certificação</li>
                            </ul>
                        </div>
                    </div>

                    {/* Seção Produtos */}
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(2)}>
                            <span>Produtos</span>
                            <span className="text-2xl">{expandedSections[2] ? "v" : ">"}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[2] ? "h-[162px]" : "h-[0px]"}
                            border-b-2 border-bluedark`}>
                            <div className="flex justify-center items-start text-white text-[13px] flex-col">
                                <ul>
                                    <li>Cuidado e higiene pessoal</li>
                                    <li>Cuidado para os bebês</li>
                                    <li>Cuidado feminino</li>
                                    <li>Cuidado para adultos</li>
                                </ul>
                                <ul>
                                    <li>Cuidados para pets</li>
                                    <li>Linha biodegradável</li>
                                    <li>Matéria-prima</li>
                                    <li>White Label</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Seção Jurídico */}
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(3)}>
                            <span>JURÍDICO</span>
                            <span className="text-2xl">{expandedSections[3] ? "v" : ">"}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[3] ? "h-[46px]" : "h-[0px]"}
                            border-b-2 border-bluedark`}>
                            <ul className="text-white text-[13px]">
                                <li>Política de privacidade</li>
                                <li>Termos e condições</li>
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
