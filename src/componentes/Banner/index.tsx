import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string //opcional
}

export const Banner = (props: BannerProps) => {
    return (
        <header className="banner">
                       <img
                src={props.enderecoImagem}
                alt={props.textoAlternativo} />
        </header>
    )
}