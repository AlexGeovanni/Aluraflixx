import styled from "styled-components"
import TituloCarusel from "./TituloCarousel"
import ContentCarousel from "./ContentCarousel";

const Div = styled.div`
    margin-top: 30px;
`



const Carosuel =(props)=>{
    const {equipos,categoria,ActualizarInicio,ActualizarVideoInicio}= props;
    const {colorPrimario,titulo}= categoria;

    return(
        <>{
                equipos.length > 0 &&
                <Div>
                    <TituloCarusel titulo={titulo} colorPrimario={colorPrimario} ActualizarInicio={ActualizarInicio}  />
                    <ContentCarousel equipos={equipos} ActualizarInicio={ActualizarInicio}  ActualizarVideoInicio={ActualizarVideoInicio}/>
                </Div>
            }
        </>
    )
}

export default Carosuel