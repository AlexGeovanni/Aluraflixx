import styled from "styled-components"
import { ContentInput,Input,Span } from "../UI"


const Inputs =({titulo,tipo,ActualizarValor})=>{
    
    const CambioValor=(e)=>{
        ActualizarValor(e.target.value)
    }

    return(
        <ContentInput>
            <Input id={titulo} type={tipo}required onChange={CambioValor} />
            <Span>{titulo}</Span>
        </ContentInput>
    )
} 

export default Inputs