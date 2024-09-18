type Props = {
    style?: string;
}

export const CertificationsLogos = ({style}: Props) => {
    return (
        <a className={`${style} w-20 h-20 bg-cover bg-no-repeat 
                    bg-center lg:w-24 lg:h-24`}
        ></a>
    )
}