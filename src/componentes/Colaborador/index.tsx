import './Colaborador.css'

interface ColaboradorProps {
    nome: string
    cargo: string
    imagem: string
    corDeFundo: string
    data: string
}

const Colaborador = ({ nome, imagem, cargo, corDeFundo, data }: ColaboradorProps) => {

    const formattedDate = new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h5>{formattedDate}</h5>
        </div>
    </div>)
}

export default Colaborador