import React from 'react';

type Content = {
    factory: string;
    title: string;
    textTwo: string;
    text: string;
    imgOne: string;
    imgTwo: string;
    imgThree: string;
    imgFour: string;
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
};

type Props = {
    isVisible: boolean;
    onClose: () => void;
    content: Content;  // Ajuste aqui para o tipo correto
}

const FabricsModal = ({ isVisible, onClose, content }: Props) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white pt-8 rounded-3xl relative w-[94%] h-[96%] md:px-2 md:h-[100%] lg:h-[80%] lg:w-[85%] lg:pt-0 lg:p-8">
                <button className="absolute top-2 right-4 text-3xl text-laranja" onClick={onClose}>X</button>
                <div className="flex justify-center items-center w-full h-full flex-col lg:flex-row">
                    <div className='w-full h-[80%] text-base text-bluedark px-2 lg:text-lg lg:w-[60%] lg:px-6'>
                        <h1 className='text-xl text-laranja  font-bold lg:text-3xl'>{content.factory}</h1>
                        {content.text &&
                        <p className='mt-4'>{content.text}</p>
                        }
                        {content.textTwo &&
                        <p className='mt-4'>{content.textTwo}</p>
                        }

                        {content.li1 &&
                        <p className='mt-4'>{content.li1}</p>
                        }
                        {content.li2 &&
                        <p>{content.li2}</p>
                        }
                        {content.li3 &&
                        <p>{content.li3}</p>
                        }
                        {content.li4 &&
                        <p>{content.li4}</p>
                        }
                        {content.li5 &&
                        <p>{content.li5}</p>
                        }
                        {content.li6 &&
                        <p>{content.li6}</p>
                        }
                        {content.li7 &&
                        <p>{content.li7}</p>
                        }
                        {content.li8 &&
                        <p>{content.li8}</p>
                        }
                        {content.li9 &&
                        <p>{content.li9}</p>
                        }
                        {content.li10 &&
                        <p>{content.li10}</p>
                        }
                        {content.li11 &&
                        <p>{content.li11}</p>
                        }
                        {content.li12 &&
                        <p>{content.li12}</p>
                        }
                        {content.li13 &&
                        <p>{content.li13}</p>
                        }
                    </div>




                    <div className='w-full h-[80%] mt-2 flex flex-col space-y-2 lg:mt-0 lg:w-[40%]'>
                        <div className='w-full h-full flex space-x-2 justify-between'>
                            <div className={`w-full h-full ${content.imgOne} bg-cover bg-center bg-no-repeat`}></div>
                            <div className={`w-full h-full ${content.imgTwo} bg-cover bg-center bg-no-repeat`}></div>
                        </div>
                        <div className='w-full h-full flex space-x-3 justify-between'>
                            <div className={`w-full h-full ${content.imgThree} bg-cover bg-center bg-no-repeat`}></div>
                            <div className={`w-full h-full ${content.imgFour} bg-cover bg-center bg-no-repeat`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FabricsModal;
