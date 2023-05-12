import styled from "styled-components";
import Banner from "../Banner/Banner";
import Carosuel from "../Carousels/Carousel";
import { DivImg, Img, P, TitiloCategoria } from "../UI";



const Section = styled.section`
    min-height: 850px;
    padding: 0 55px;
    padding-bottom: 90px;
    background-color: rgba(0,0,0,.9);
    color: rgba(245, 245, 245, 1);
    position: relative;
    z-index: 0;
`

const Div = styled.div`
    padding-top:260px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    & > div{
        width: 645px;
    }
`

const H1 = styled.h1`
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 54px;
    margin-bottom: 10px;
`



const Principal =()=>{
    return(
        <Section>
            <Banner />
            <div>
                <Div>
                    <div>
                        <TitiloCategoria onClick={()=> alert("hola crack")}>
                            <h1>Front End</h1>
                        </TitiloCategoria>
                        <H1>Challenge React</H1>
                        <P> Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</P>
                    </div>
                    <DivImg>
                        <Img src="https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ" alt="" />
                    </DivImg>
                </Div>
            <Carosuel />
            </div>
            <Carosuel />
        </Section>
    )
}

export default Principal;