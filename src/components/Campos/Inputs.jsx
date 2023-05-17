import styled from "styled-components"
import { ContentInput,Input,Span } from "../UI"


const Inputs =({titulo,tipo,ActualizarValor,valor})=>{
    
    const CambioValor=(e)=>{
        ActualizarValor(e.target.value)
    }

    return(
        <ContentInput>
            <Input id={titulo} value={valor} type={tipo} required onChange={CambioValor} />
            <Span>{titulo}</Span>
        </ContentInput>
    )
} 

export default Inputs