import styled from "styled-components";
import { ContentInput, Span,Textarea } from "../UI";



const TextTarea=(props)=>{
    const {titulo,ActualizarDescrip}= props;

    const CambioValor=(e)=>{
        ActualizarDescrip(e.target.value)
    }

    return(
        <ContentInput>
            <Textarea rows={"5"}  cols={"30"} required onChange={CambioValor} />
            <Span>{titulo}</Span>
        </ContentInput>
    )
}

export default TextTarea