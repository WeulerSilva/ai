import React from 'react';

type Content = {
    title: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
    li6: string;
    li7: string;
    li8: string;
    li9: string;
    li10: string;
    li11: string;
    li12: string;
    li13: string;
    li14: string;
    li15: string; 
    li16: string;
};

type Props = {
    isVisible: boolean;
    onClose: () => void;
    content: Content;  // Ajuste aqui para o tipo correto
}

const JuridicModal = ({ isVisible, onClose, content }: Props) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white pt-8 rounded-3xl relative w-[94%] h-[96%] md:px-2 md:h-[100%] lg:h-[80%] lg:w-[85%] lg:pt-0 lg:p-8">
                <button className="absolute top-2 right-4 text-3xl text-bluedark font-bold hover:text-laranja" onClick={onClose}>X</button>
                <div className="flex justify-center items-center w-full h-full flex-col">
                    <div className='w-full h-[80%] overflow-auto custom-scrollbar flex justify-start flex-col text-base font-medium 
                       space-y-4 text-bluedark text-justify px-2 lg:text-lg lg:w-[100%] lg:px-6'>
                        <h2 className='text-3xl font-bold'>{content.title} <span className='text-laranja'>{content.li1}</span> {content.li16}</h2>
                        <p>{content.li2}</p>

                        <p>{content.li3}</p>

                        <p>{content.li4}</p>

                        <p>{content.li5}</p>

                        <p>{content.li6}</p>
                        {content.li10 &&
                            <>
                                <h2 className='text-3xl font-bold'>{content.li1} <span className='text-laranja'>{content.li7}</span></h2>

                                <p>{content.li8}</p>

                                <p>
                                    <span className='pl-8'></span>
                                    {content.li9}
                                </p>

                                <h2 className='text-2xl font-bold'>{content.li10}</h2>

                                <p>
                                    {content.li11}
                                </p>

                                <p>
                                    {content.li12}
                                </p>

                                <p>
                                    {content.li13}
                                </p>

                                <p>
                                    {content.li14}
                                </p>

                                <p>
                                    {content.li15}
                                </p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JuridicModal;
