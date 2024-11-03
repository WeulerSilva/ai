"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function LanguageToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    // Extrair o idioma atual do caminho da URL
    const currentLocale = pathName.split('/')[1];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Construir a nova URL, garantindo que o idioma seja substituído corretamente
    const buildNewPath = (locale: string) => {
        // Se o caminho já contiver um idioma, substituí-lo
        if (['pt', 'en', 'es'].includes(currentLocale)) {
            return pathName.replace(`/${currentLocale}`, `/${locale}`);
        } else {
            // Se o idioma não estiver presente, adicionar no início
            return `/${locale}${pathName}`;
        }
    };

    return (
        <>
            <div className='w-[86px] h-[30px] flex justify-around items-center bg-black'>
                <Link href={buildNewPath('pt')} locale='pt'>
                    <div className={`flex items-center justify-center py-2 hover:bg-laranja/70 rounded-[1px]`}>
                        <Image
                            alt="es"
                            src={"/images/pt.webp"}
                            width={22}
                            height={22}
                            className="rounded-full w-[22px] h-[22px]"
                        />
                    </div>
                </Link>
                <Link href={buildNewPath('en')} locale='en'>
                    <div className={`flex items-center justify-center py-2 hover:bg-laranja/70 rounded-[1px]`}>
                        <Image
                            alt="es"
                            src={"/images/en.webp"}
                            width={22}
                            height={22}
                            className="rounded-full w-[22px] h-[22px]"
                        />
                    </div>
                </Link>
                <Link href={buildNewPath('es')} locale='es'>
                    <div className={`flex items-center justify-center py-2 hover:bg-laranja/70 rounded-[1px]`}>
                        <Image
                            alt="es"
                            src={"/images/es.webp"}
                            width={22}
                            height={22}
                            className="rounded-full w-[22px] h-[22px]"
                        />
                    </div>
                </Link>
            </div>

            <div className='hidden justify-end items-center z-60'> {/*hidden absolute */}
                {/* Div que mostra o idioma atual e a seta */}
                <div className={`w-[54px] h-[34px] rounded-3xl ${isOpen ? 'rounded-es-none' : ''} bg-black/30 flex justify-center items-center cursor-pointer space-x-2`} onClick={toggleDropdown}>
                    <span className={`text-white transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>

                    <Image
                        alt={currentLocale}
                        src={`/images/${currentLocale}.webp`}
                        width={30}
                        height={30}
                        className="w-[25px] h-[25px] rounded-full border border-white"
                    />
                </div>

                {/* Menu suspenso com transição suave */}
                <div
                    className={`absolute top-[37px] right-[21px] z-30 w-10 bg-black/30 rounded-md rounded-t-none shadow-lg md:right-[83px]
                    md:top-[35px] md:left-0 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48' : 'max-h-0'}`}
                    style={{ transitionProperty: 'max-height' }}
                >
                    <Link href={buildNewPath('pt')} locale='pt' onClick={() => setIsOpen(false)}>
                        <div className={`flex items-center justify-center py-2 hover:bg-laranja rounded-md ${currentLocale === 'pt' ? 'bg-laranja/70' : ''}`}>
                            <Image
                                alt="pt"
                                src={"/images/pt.webp"}
                                width={22}
                                height={22}
                                className="rounded-full w-[22px] h-[22px]"
                            />
                        </div>
                    </Link>
                    <Link href={buildNewPath('en')} locale='en' onClick={() => setIsOpen(false)}>
                        <div className={`flex items-center justify-center py-2 hover:bg-laranja/70 rounded-md ${currentLocale === 'en' ? 'bg-laranja/70' : ''}`}>
                            <Image
                                alt="en"
                                src={"/images/en.webp"}
                                width={22}
                                height={22}
                                className="rounded-full w-[22px] h-[22px]"
                            />
                        </div>
                    </Link>
                    <Link href={buildNewPath('es')} locale='es' onClick={() => setIsOpen(false)}>
                        <div className={`flex items-center justify-center py-2 hover:bg-laranja/70 rounded-md ${currentLocale === 'es' ? 'bg-laranja/70' : ''}`}>
                            <Image
                                alt="es"
                                src={"/images/es.webp"}
                                width={22}
                                height={22}
                                className="rounded-full w-[22px] h-[22px]"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
