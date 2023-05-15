import styled from "styled-components";
import Banner from "../Banner/Banner";
import Carosuel from "../Carousels/Carousel";
import { DivImg, Img, P, TituloCategoria } from "../UI";
import ContentCarousel from "../Carousels/ContentCarousel";
import { useState } from "react";
import { Api } from "../../api/ClienteService.js"
import { useEffect } from "react";


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
    margin-bottom: 50px;
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

const Principal =(props)=>{
    const {equipos,categorias}=props;

    const [videoInicio,setVideoInicio]=useState('Front End');

    const [imgIncio,setImgInicio]=useState('https://www.youtube.com/watch?v=AG2QssLpQzI')

    

    const ActualizarInicio =(titulo)=>{
        setVideoInicio(titulo)
    }

    const ActualizarVideoInicio=async(id)=>{
        const {data}= await Api.get(`videos/${id}`)
        setImgInicio(data.urlImg);
    }
    return(
        <Section>
            <Banner />
            <>
                {
                    categorias.map((categoria)=>{
                            if(categoria.titulo === videoInicio){
                                return <div key={categoria.id}>
                                    <Div>
                                        <div>
                                            <TituloCategoria style={{backgroundColor:categoria.colorPrimario}}>
                                                <h1>{videoInicio}</h1>
                                            </TituloCategoria>
                                            <H1>Challenge React</H1>
                                            <P> Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</P>
                                        </div>
                                        <DivImg>
                                            {/* <Img src={imgIncio} alt={videoInicio} />
                                            <i className="fa-solid fa-play"></i> */}
                                            
                                            <iframe loading="lazy" width={"100%"} height={"100%"} src="https://www.youtube.com/watch?v=AG2QssLpQzI" 
                                            rameborder="0" allowFullScreen="allowfullscreen"></iframe>
                                        </DivImg>
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
                    if(categoria.titulo != videoInicio){
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