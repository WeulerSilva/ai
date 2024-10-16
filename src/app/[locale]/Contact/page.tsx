import { useTranslations } from "next-intl";
import { EmailContact } from "../components/EmailContact";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";


export default function Pages() {
    const t = useTranslations('contact');

    return (
        <section className='w-screen h-full flex justify-center items-center flex-col mt-6 md:mt-16 lg:mt-24 xl:mt-24'>
            <div className="w-[90%] h-[300px] flex md:bg-contact-first bg-cover bg-no-repeat md:pl-[5%] md:h-[400px] md:bg-[-340px] lg:bg-[-240px] xl:bg-[-100px] xl:w- 2xl:bg-left">
                <div className="w-full flex flex-col justify-center items-center md:items-start md:justify-start">
                    <h2 className=" text-2xl text-bluedark font-bold mt-12 md:mt-36 mb-6 xl:text-4xl">{t('cost-1')} <span className="text-laranja">{t('cost-2')}</span></h2>
                    <p className="w-full text-justify font-medium md:w-[75%] 2xl:w-[75%]">
                        {t('cost-p')}
                    </p>
                </div>
                <div className="hidden w-full h-full bg-a&l bg-contain bg-center bg-no-repeat md:block">

                </div>
            </div>
            <EmailContact />

            <div className="w-full flex flex-col justify-center items-center md:items-start md:justify-start md:w-[80%]">
                <h2 className=" text-2xl text-bluedark font-bold mt-12 mb-6 xl:text-4xl">E <span className="text-laranja">-mail</span></h2>
                <a href="mailto:info@ank-ilumer.com" className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer rounded-full 
                               bg-bluedark text-laranja lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                    <MdEmail className="w-[85%] h-[85%]" />
                </a>
                <h2 className=" text-2xl text-bluedark font-bold mt-12 mb-6 xl:text-4xl">{t('social-1')} <span className="text-laranja">{t('social-2')}</span></h2>
                <div className="w-[60%] text-bluedark/60 flex items-center justify-between mb-6 md:w-[63%] md:h-[60%] lg:w-[45%] xl:w-[30%]">
                    <a href="https://www.instagram.com/ank.ilumer/" target="_blank"
                        className="w-[40px] h-[40px] cursor-pointer rounded-full bg-bluedark text-laranja flex justify-center items-center
                                lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                        <FaInstagram className="w-[70%] h-[70%]" />
                    </a>
                    <a href="https://www.linkedin.com/company/ank-ilumer/about/?viewAsMember=true" target="_blank"
                        className="w-[40px] h-[40px] cursor-pointer rounded-full bg-bluedark text-laranja flex justify-center items-center
                                lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                        <RiLinkedinFill className="w-[70%] h-[70%]" />
                    </a>
                    <a href="https://www.youtube.com/@ANK-Ilumer" target="_blank"
                        className="w-[40px] h-[40px] cursor-pointer rounded-full bg-bluedark text-laranja flex justify-center items-center
                                lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                        <AiFillYoutube className="w-[70%] h-[70%]" />
                    </a>
                </div>
            </div>
        </section>
    );
};
