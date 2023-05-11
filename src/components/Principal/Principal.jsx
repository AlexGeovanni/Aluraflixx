import styled from "styled-components";
import Banner from "../Banner/Banner";
import Carosuel from "../Carousels/Carousel";

const Section = styled.section`
    min-height: 100vh;
    padding: 0 55px;
    padding-bottom: 90px;
    background-color: rgba(0,0,0,.9);
    color: rgba(245, 245, 245, 1);
    position: relative;
    z-index: -10;
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
const Img =styled.img`
    width: 100%;
`
const TitiloCategoria =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6BD1FF;
    width: 250px;
    height: 70px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 45px;
    & h1{
        font-size: 40px;
        font-weight: 400;
        font-style: normal;
        text-align: center;
        line-height: 70px;
    }
`
const H1 = styled.h1`
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 54px;
    margin-bottom: 10px;
`
const P = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
`

const Principal =()=>{
    return(
        <Section>
            <Banner />
            <Div>
                <div>
                    <TitiloCategoria>
                        <h1>Front End</h1>
                    </TitiloCategoria>
                    <H1>Challenge React</H1>
                    <P> Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</P>
                </div>
                <div>
                    <Img src="https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ" alt="" />
                </div>
            </Div>
            <Carosuel />
        </Section>
    )
}

export default Principal;