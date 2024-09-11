import { AboutSpan } from "./AboutSpan";

type Props = {
    text: string;
}

export default function FabricsDivs({ text}: Props) {


    return (
        <div className="w-full h-[200px] bg-red-700 border-[6px] border-laranja flex flex-col justify-around items-center
                         text-center text-white text-lg px-2 font-bold md:text-sm md:w-[32%] lg:text-lg xl:text-2xl 2xl:h-[270px]">
            <h6>{text}</h6>
            <AboutSpan text="Ver mais" style="bg-laranja text-bluedark md:mr-0 text-[12px] lg:text-[16px] xl:text-lg" />
        </div>
    );
}
