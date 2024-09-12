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


            <div className='text-bluedark w-full h-[400px] flex justify-center items-center flex-col text-[15px] text-justify 
                   bg-[#F0F0F0] md:h-[300px] md:pl-0'>
                <div className="w-full h-full flex justify-center items-center flex-col mt-7 md:items-start">
                    <span className="w-full uppercase mb-5 font-renogare font-bold text-[15px] md:text-[27px] text-center text-redclear">
                        {t('h1')}</span>

                    <form className="w-full h-full font-gothan flex justify-end items-start  flex-col
                            md:text-[12px] md:flex-row lg:text-[15px] md:w-[90%] md:space-x-6 2xl:space-x-1" onSubmit={sendEmail}>
                        <div className="w-full flex items-center justify-between flex-col md:w-[20%] md:h-[60%]">
                            <div className="w-full flex items-center flex-col mb-6 md:mb-0 md:items-start">
                                <input type="text"
                                    placeholder={nameError || t('name')}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    maxLength={100}
                                    className={`w-[90%] h-[36px] bg-white rounded-lg md:w-full 2xl:w-[95%]
                                        ${nameError ? 'placeholder-red-600' : 'placeholder:text-black placeholder:pl-6'}`}
                                />
                            </div>

                            <div className="w-full flex flex-col items-center md:items-start">
                                <input type="text"
                                    placeholder={emailError || t('email')}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`w-[90%] h-[36px] bg-white rounded-lg md:w-full 2xl:w-[95%]
                                        ${emailError ? 'placeholder-red-600' : 'placeholder:text-black placeholder:pl-6'}`}
                                />
                            </div>

                        </div>

                        <div className="w-full h-full mt-7 flex justify-center items-center flex-col md:flex-row md:mt-0 md:w-[30%]">
                            <div className="w-full h-full flex justify-start items-center flex-col md:items-start">
                                <textarea
                                    placeholder={messageError || t('message')}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    maxLength={500}
                                    className={`w-[90%] h-[130px] bg-white md:w-full rounded-2xl 2xl:w-[95%]
                                        ${messageError ? 'placeholder-red-600' : 'placeholder:text-black placeholder:pl-6'}`}
                                />
                            </div>

                            <div className="w-[90%] h-full flex justify-center items-center md:justify-end md:w-[25%]">
                                <button type="submit" className="mt-4 font-renogare text-[13px] bg-redclear text-white px-3 py-2 rounded-2xl uppercase">{t('send')}</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}
