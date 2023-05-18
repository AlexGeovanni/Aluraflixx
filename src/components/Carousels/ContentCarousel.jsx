import { motion } from "framer-motion"
import { DivImg, Img } from "../UI"
import styled from "styled-components"
import { useEffect,useState,useRef } from "react"

const ContentCaruosel =styled(motion.div)`
    overflow: hidden;
    cursor: grab;
    /* background-color: azure; */
`

const ItemsCarousel = styled(motion.div)`
    display: flex;
    gap: 15px;
`

const Imgc =styled(Img)`
    width: 400px;
    pointer-events: none;
    @media screen and (max-width: 1100px){
        width: 370px;
    }
    @media (max-width:768px){
        width: 280px;
    }
`

const ContentCarousel =({equipos,ActualizarInicio,ActualizarVideoInicio})=>{

    const carousel = useRef();
    const [width,setWidth]=useState(0);
    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    const Ejecutar=(titulo,id)=>{
        ActualizarInicio(titulo)
        ActualizarVideoInicio(id)
    }

    return(
        <ContentCaruosel ref={carousel} whileTap={{cursor:"grabbing"}}  >
            <ItemsCarousel 
            drag="x" 
            dragConstraints={{right:0, left:-width}}
            >
                {
                    equipos.map((equipo)=>{
                        return <DivImg key={equipo.id} onDoubleClick={()=>Ejecutar(equipo.categoria,equipo.id)} >
                            <Imgc src={equipo.urlImg} />
                        </DivImg> 
                    })
                
                }
            </ItemsCarousel>
        </ContentCaruosel>
    )
}

export default ContentCarousel;