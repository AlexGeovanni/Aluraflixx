import styled from "styled-components";
import { ContentInput, Span,Textarea } from "../UI";



const TextTarea=({titulo})=>{
    return(
        <ContentInput>
            <Textarea rows={"5"}  cols={"30"} required />
            <Span>{titulo}</Span>
        </ContentInput>
    )
}

export default TextTarea