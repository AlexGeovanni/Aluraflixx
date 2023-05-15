import styled from "styled-components";
import { P, TituloCategoria } from "../UI"


const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const TituloCarusel=({titulo,colorPrimario,ActualizarInicio})=>{
    return(
        <Div>
            <TituloCategoria style={{marginBottom:"20px",backgroundColor:colorPrimario}} onClick={()=>ActualizarInicio(titulo)}>
                <h1>{titulo}</h1>
            </TituloCategoria>
            <P>Formación {titulo} de Alura Latam</P>
        </Div>
    )
}

export default TituloCarusel;