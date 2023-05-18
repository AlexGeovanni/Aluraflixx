import styled from "styled-components";
import Banner from "../Banner/Banner";
import Carosuel from "../Carousels/Carousel";
import { DivImg, P, TituloCategoria } from "../UI";
import ContentCarousel from "../Carousels/ContentCarousel";
import { useState } from "react";
import { Api } from "../../api/ClienteService.js"
import ReactPlayer from "react-player/youtube";

const Section = styled.section`
    min-height: 850px;
    padding: 0 55px;
    padding-bottom: 90px;
    background-color: rgba(0,0,0,.9);
    color: rgba(245, 245, 245, 1);
    position: relative;
    z-index: 0;
    @media screen and (max-width: 768px){
        padding:0 20px;
        padding-bottom: 50px;
    }
`
const DivVideo =styled(DivImg)`
    height: 385px;
    @media screen and (max-width:1100px) {
        height: 300px;
    }
    @media screen and (max-width:768px) {
        height: 220px;
    }
`

const Div = styled.div`
    padding-top:260px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 50px;
    & > div{
        width: 645px;
    }
    @media (max-width:768px) {
        padding-top: 100px;
        flex-direction: column;
        gap: 25px;
        > div {
            width: 100%;
            margin: auto;
        }
    }
`
const H1 = styled.h1`
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 54px;
    margin-bottom: 10px;
    @media screen and (max-width:1200px) {
        font-size: 32px;
    }
    @media screen  and (max-width:768px){
        font-size: 27px;
        line-height: 32px;
        font-weight: 300;
    }
`

const Principal =(props)=>{
    const {equipos,categorias}=props;


    const [categoriaInicio,setCategoriaInicio]=useState('Front End');
    const [ulrVideo,setUrlVideo]=useState('https://www.youtube.com/watch?v=AG2QssLpQzI&t=2s')


    const ActualizarInicio =(titulo)=>{
        setCategoriaInicio(titulo)
    }

    const ActualizarVideoInicio=async(id)=>{
        const res= await Api.get(`videos/${id}`)
        if(res.status === 200){
            return setUrlVideo(res.data.urlVideo)
        }
    }


    return(
        <Section>
            <Banner />
            <>
                {
                    categorias.map((categoria)=>{
                            if(categoria.titulo === categoriaInicio){
                                return <div key={categoria.id}>
                                    <Div>
                                        <div>
                                            <TituloCategoria style={{backgroundColor:categoria.colorPrimario}}>
                                                <h1>{categoriaInicio}</h1>
                                            </TituloCategoria>
                                            <H1>Challenge React</H1>
                                            <P> Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</P>
                                        </div>
                                        <DivVideo>                                            
                                            <ReactPlayer
                                            width={"100%"}
                                            height={"100%"}
                                                url={ulrVideo}
                                                loop
                                                
                                            />
                                        </DivVideo>
                                    </Div>
                                    <ContentCarousel equipos={equipos.filter((equipo)=> equipo.categoria === categoria.titulo)} 
                                    ActualizarInicio={ActualizarInicio}
                                    ActualizarVideoInicio={ActualizarVideoInicio} 
                                    />
                                </div>
                            }
                            return null
                        })
                    }
            </>
            {
                categorias.map((categoria)=>{
                    if(categoria.titulo != categoriaInicio){
                        return <Carosuel key={categoria.id} 
                                categoria={categoria} 
                                equipos={equipos.filter((equipo)=> equipo.categoria === categoria.titulo)} 
                                ActualizarInicio={ActualizarInicio}
                                ActualizarVideoInicio={ActualizarVideoInicio}
                                />
                    }
                })
            }
        </Section>
    )
}

export default Principal;