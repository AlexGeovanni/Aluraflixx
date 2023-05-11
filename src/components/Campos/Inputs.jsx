import styled from "styled-components"
import { ContentInput,Input,Span } from "../UI"


const Inputs =({titulo,tipo})=>{
    return(
        <ContentInput>
            <Input id={titulo} type={tipo}required  />
            <Span>{titulo}</Span>
        </ContentInput>
    )
} 

export default Inputs