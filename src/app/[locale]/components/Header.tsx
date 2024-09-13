"use client"

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/app/navigation";
import LanguageToggle from "./LanguageToggle";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const t = useTranslations('header');

    const menuItems = [
        { key: 'Home', href: '/' },
        { key: 'Brands', href: '/#Brands' },
        { key: 'Journey', href: '/Inovation#test' },
        { key: 'Inovation', href: '/Inovation' },
        { key: 'Products', href: '/Products' },
        { key: 'Contact', href: '/Contact' }
    ];

    const router = useRouter();
    const pathname = usePathname();  // Obtém a rota atual

    const [MenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);

    return (
        <header className="w-screen h-[70px] bg-laranja border-b-[6px] border-[#BD8A14] flex justify-center items-center">
            <div className="w-[80%] h-full flex justify-between items-center relative">
                <Link href={'/'} className="flex w-[120px] h-full justify-items-center items-center relative" title="ilumer">
                    <div className="w-[100px] h-[100px] absolute top-[10px] z-30 bg-logo bg-contain bg-no-repeat bg-top xl:w-[120px] xl:h-[120px]"></div>
                </Link>

                <div className="w-full h-full relative">
                    <ul className="w-full h-full hidden relative justify-around items-end font-arial uppercase top-10 z-20 text-[8.5px] md:flex md:text-[10px] lg:text-[14px]">
                        {menuItems.map((item) => {
                            // Verifica se o item é a página atual
                            const isActive =
                                item.href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.href);

                            return (
                                <div key={item.key}> {/* Adicione a key aqui */}
                                    <li
                                        className={`font-conthrax cursor-pointer leading-3 font-semibold text-center 
                                            ${isActive ? 'border-b-2 border-browndark' : 'border-b-2 border-white hover:border-browndark'} 
                                            text-blue-950`}
                                        onClick={() => router.push(item.href)}
                                    >
                                        <a className="relative">
                                            {t(item.key)}
                                        </a>
                                    </li>
                                    {item.key === 'Contact' &&
                                        <div className="w-[1px] h-[60px] z-30 hidden md:absolute md:top-[-38px] right-[30px] md:flex justify-center items-center">
                                            <LanguageToggle />
                                        </div>
                                    }
                                </div>
                            );
                        })}
                    </ul>
                </div>





                <MenuMobile
                    MenuMobileOpen={MenuMobileOpen}
                    setMenuMobileOpen={setMenuMobileOpen}
                />

                <div className={`w-screen ${MenuMobileOpen ? 'h-[250px]' : 'h-0'} z-20 bg-[#BD8A14] absolute right-0 top-[70px] transition-all 
                     duration-500 ease-in-out overflow-hidden flex justify-start pb-2 pl-[15%] text-white md:pb-0`}>
                    <nav className="flex flex-col">
                        <ul className="w-full h-full pr-6 flex flex-col justify-end items-start space-y-3 font-semibold text-md font-conthrax uppercase">
                            {menuItems.map((item) => {
                                // Verifica se o item é a página atual
                                const isActive =
                                    item.href === '/'
                                        ? pathname === '/'
                                        : pathname.startsWith(item.href);

                                return (
                                    <li
                                        key={item.key}
                                        className={`cursor-pointer max-w-full leading-none font-bold
                                ${isActive ? 'border-b-4 border-white text-bluedark' : 'border-b-4 border-laranja hover:border-white'} `}
                                        onClick={() => {
                                            router.push(item.href);
                                            setMenuMobileOpen(false); // Fecha o menu após o clique
                                        }}
                                    >
                                        <a className="font-conthrax">
                                            {t(item.key)}
                                        </a>

                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="w-full h-full flex justify-end pt-2">
                        <LanguageToggle />
                    </div>
                </div>
            </div>

        </header>
    );
}
