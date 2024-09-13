import { EmailContact } from "../components/EmailContact";


export default function Pages() {

    return (
        <section className='w-screen h-full flex justify-center items-center flex-col mt-6 md:mt-16 lg:mt-24 xl:mt-24'>
            <div className="w-[90%] h-[300px] md:bg-contact-first bg-cover bg-no-repeat md:pl-[5%] md:h-[400px] md:bg-[-350px] lg:bg-[-150px] 2xl:bg-right">
                <h2 className=" text-2xl text-bluedark font-bold mt-12 md:mt-36 mb-6 xl:text-4xl">Costomer <span className="text-laranja">Care</span></h2>
                <p className="w-full text-justify font-medium md:w-[40%] 2xl:w-[38%]">Bem-vindo ao nosso serviço de Customer Care!
                    Estamos aqui para garantir que sua experiência
                    conosco seja excepcional. Nossa equipe dedicada está
                    pronta para responder suas dúvidas, resolver qualquer
                    problema e ouvir seu feedback com atenção.</p>
            </div>
            <EmailContact/>
        </section>
    );
};
