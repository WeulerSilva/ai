type Props = {
    style?: string;
    link?: string;
}

export const CertificationsLogos = ({style, link}: Props) => {
    return (
        <a className={`${style} w-20 h-20 cursor-pointer bg-cover bg-no-repeat 
                    bg-center lg:w-24 lg:h-24`}
            href={link || ''} target="_blank"
        ></a>
    )
}