import './CampoTexto.css'

interface CampoTextoProps {
    placeholder: string
    aoAlterado: (valor: string) => void
    valor: string
    obrigatorio?: boolean
    label: string
    tipo?: "text" | "password" | "date" | "email" | "number"
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, tipo = "text", obrigatorio = false }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
                type={tipo} />
        </div>
    )
}

export default CampoTexto