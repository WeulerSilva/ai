type Props = {
    direction?: boolean;
    year: string;
    text: string;
    hidden?: boolean;
}

export default function YearDiv({ direction, year, text, hidden}: Props) {


    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className={`${direction ? '' : 'opacity-0'} flex justify-center items-center flex-col`}>
                <h6 className="w-[90%] text-lg text-center font-semibold leading-5 mb-2">{text}</h6>
                <div className="w-[15px] h-[15px] border-[6px] border-black rounded-full"></div>
                <div className="w-1 h-[60px] bg-black"></div>
            </div>

            <div className="flex justify-center items-center w-full">
                <div className="flex-grow h-1 bg-black"></div>

                <div className="w-[70px] h-[70px] bg-laranja rounded-full border-4 border-white flex justify-center items-center">
                    <span className="text-white font-semibold text-2xl">{year}</span>
                </div>

                <div className={`flex-grow h-1 ${hidden? 'bg-laranja/0': 'bg-black'}`}></div>
            </div>

            <div className={`${direction ? 'opacity-0' : ''} flex justify-center flex-col-reverse items-center`}>
                <h6 className="w-[90%] text-lg text-center font-semibold leading-5 mt-2">{text}</h6>
                <div className="w-[15px] h-[15px] border-[6px] border-black rounded-full"></div>
                <div className="w-1 h-[60px] bg-black"></div>
            </div>
        </div>
    );
}
