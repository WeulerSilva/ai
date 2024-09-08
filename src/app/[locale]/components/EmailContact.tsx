"use client"

import { useTranslations } from "next-intl";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { FormSend } from "./FormSend";

export const EmailContact = () => {
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

        console.log(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)

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


            <div className='text-bluedark w-full h-full flex justify-center items-center flex-col text-[15px] text-justify 
                   bg-[#F0F0F0] md:pl-0'>
                <div className="w-full h-full flex justify-center items-center flex-col mt-7 md:items-start">
                    <span className="w-full uppercase mb-5 font-renogare font-bold text-[15px] md:text-[27px] text-center text-redclear">
                        {t('h1')}</span>

                    <form className="w-full h-full font-gothan flex justify-center items-center mb-7 flex-col
                            md:text-[12px] md:flex-row lg:text-[15px] md:space-x-6 2xl:space-x-1" onSubmit={sendEmail}>
                        <div className="w-full h-full flex items-start justify-start flex-col space-y-5 mb-10 md:w-[40%]">
                            <div className="w-full h-full flex items-center flex-col md:items-start">
                                <span className="text-[14px] mb-1 md:text-[19px]">{t('name')}</span>
                                <input type="text"
                                    placeholder={nameError || "Digite seu nome..."}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    maxLength={100}
                                    className={`w-[90%] h-[36px] bg-white rounded-lg md:w-full 2xl:w-[95%]
                                        ${nameError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                />
                            </div>

                            <div className="w-full h-full flex flex-col items-center md:items-start">
                                <span className="text-[14px] mb-1 md:text-[19px]">{t('email')}</span>
                                <input type="text"
                                    placeholder={emailError || "Digite seu email..."}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`w-[90%] h-[36px] bg-white rounded-lg md:w-full 2xl:w-[95%]
                                        ${emailError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                />
                            </div>

                        </div>

                        <div className="w-full h-full mt-7 flex justify-center items-center md:mt-0 md:w-[35%]">
                            <div className="w-full h-full flex justify-start items-center flex-col md:items-start">
                                <span className="text-[14px] mb-2 md:text-[19px]">{t('message')}</span>
                                <textarea
                                    placeholder={messageError || "Digite sua mensagem..."}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    maxLength={500}
                                    className={`w-[90%] h-[130px] bg-white md:w-full rounded-2xl 2xl:w-[95%]
                                        ${messageError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                />

                                <div className="w-[90%] h-full flex justify-end items-center md:w-[95%]">
                                    <button type="submit" className="mt-4 font-renogare text-[13px] bg-redclear text-white px-3 py-2 rounded-2xl uppercase">{t('send')}</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}
