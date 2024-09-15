"use client"

import { useTranslations } from "next-intl";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { FormSend } from "./FormSend";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";

export const EmailPhone = () => {
    const t = useTranslations('contact');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sucessEmail, setSucessEmail] = useState(false);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateName(name: string): boolean {
        // Verifica se o nome contém apenas letras e tem pelo menos 3 caracteres
        const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
        return nameRegex.test(name);
    }



    function validateForm(): boolean {
        let isValid = true;

        if (!validateName(name)) {
            setNameError(t('name-erro'));
            setName('');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!validateEmail(email)) {
            setEmailError(t('email-erro'));
            setEmail('');
            isValid = false;
        } else {
            setEmailError('');
        }


        if (message.trim().length < 10) {
            setMessageError(t('message-erro'));
            isValid = false;
        } else {
            setMessageError('');
        }

        return isValid;
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };


        emailjs.send("service_sehnuts", "template_tpoqg2s", templateParams, "b8thRCDhLUkpVcbAB")
            .then(() => {
                setMessage('');
                setEmail('');
                setName('');
                setSucessEmail(true);
            }, () => {
            });
    }

    return (
        <>
            {sucessEmail &&
                <FormSend />
            }


            <div className='text-bluedark w-full h-[450px] flex justify-center items-center flex-col text-[15px] text-justify 
                   bg-bluedark relative mt-4 md:h-[460px] md:pl-0 md:w-[90%]'>
                <div className=" w-full h-full bg-contact-social bg-contain bg-no-repeat left-0
                    md:bg-cover md:bg-left absolute"></div>
                <div className="w-full h-full flex justify-center items-center flex-col mt-7 md:items-start relative z-10">

                    <form className="w-full h-full font-gothan flex justify-end items-center flex-col space-y-4 md:justify-end md:items-end
                            md:text-[12px] lg:text-[15px] md:space-x-6 2xl:space-x-1 md:w-[95%] lg:w-[88%]" onSubmit={sendEmail}>
                        <div className="w-[90%] text-bluedark/60 flex items-center justify-between mb-6 md:mb-0 md:w-[63%] md:h-[60%] lg:w-[45%] xl:w-[20%]">
                            <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer rounded-full bg-laranja 
                                lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                                <MdEmail className="w-[85%] h-[85%]" />
                            </div>
                            <div className="w-[40px] h-[40px] cursor-pointer rounded-full bg-laranja lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                                <FaFacebook className="w-full h-full" />
                            </div>
                            <div className="w-[40px] h-[40px] cursor-pointer rounded-full bg-laranja flex justify-center items-center
                                lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                                <FaInstagram className="w-[70%] h-[70%]" />
                            </div>
                            <div className="w-[40px] h-[40px] cursor-pointer rounded-full bg-laranja flex justify-center items-center
                                lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                                <RiLinkedinFill className="w-[70%] h-[70%]" />
                            </div>
                            <div className="w-[40px] h-[40px] cursor-pointer rounded-full bg-laranja flex justify-center items-center
                                lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
                                <AiFillYoutube className="w-[70%] h-[70%]" />
                            </div>
                        </div>

                        <div className="w-full flex items-end justify-center flex-col md:space-y-4 md:w-[63%] md:h-[60%] lg:w-[45%] xl:w-[25%]">
                            <div className="w-full flex items-center flex-col mb-6 md:mb-0 md:items-end">
                                <input type="text"
                                    placeholder={nameError || t('name-2')}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    maxLength={100}
                                    className={`w-[90%] h-[45px] bg-white rounded-3xl md:w-full
                                        ${nameError ? 'placeholder-red-600' : 'placeholder:text-black placeholder:pl-6'}`}
                                />
                            </div>

                            <div className="w-full flex flex-col items-center md:items-end">
                                <input type="text"
                                    placeholder={emailError || t('email')}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`w-[90%] h-[45px] bg-white rounded-3xl md:w-full
                                        ${emailError ? 'placeholder-red-600' : 'placeholder:text-black placeholder:pl-6'}`}
                                />
                            </div>

                        </div>

                        <div className="w-full h-full flex justify-center items-center flex-col md:items-end  md:w-[70%] lg:w-[45%] xl:w-[25%]">
                            <textarea
                                placeholder={messageError || t('message')}
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                maxLength={500}
                                className={`w-[90%] h-[109px] bg-white rounded-2xl lg:w-full
                                        ${messageError ? 'placeholder-red-600' : 'placeholder:text-black placeholder:pt-3 placeholder:pl-6'}`}
                            />
                        </div>

                        <div className="w-full h-full flex justify-center items-start md:justify-end md:w-[25%]">
                            <button type="submit" className="h-[50px] mt-4 font-renogare text-[13px] bg-laranja text-bluedark px-5 py-2 
                                rounded-2xl uppercase md:mt-0">{t('send')}</button>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}
