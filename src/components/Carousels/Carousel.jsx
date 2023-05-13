import styled from "styled-components"
import { motion } from "framer-motion"
import { DivImg, Img, TitiloCategoria } from "../UI"
import { useEffect,useState,useRef } from "react"


const Div =styled(motion.div)`
    padding: 8px;
    margin-top: 50px;
    overflow: hidden;
    cursor: grab;
    /* background-color: azure; */
`
const DivCarosel = styled(motion.div)`
    display: flex;
    gap: 15px;
`

const Imgc =styled(Img)`
    width: 400px;
    pointer-events: none;
`

const Carosuel =(props)=>{
    const {equipos,categoria}= props;
    const {colorPrimario,titulo}= categoria
    const carousel = useRef();
    const [width,setWidth]=useState(0)
    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    return(
        <>
            {
                equipos.length > 0 &&
                <Div ref={carousel} whileTap={{cursor:"grabbing"}}  >
                <TitiloCategoria style={{marginBottom:"20px",backgroundColor:colorPrimario}} s>
                    <h1>{titulo}</h1>
                </TitiloCategoria>
                <DivCarosel 
                drag="x" 
                dragConstraints={{right:0, left:-width}}
                >
                    {
                        equipos.map((equipo,i)=>{
                            return <DivImg key={i} >
                                <Imgc src={equipo.urlImg} />
                            </DivImg> 
                        })
                    
                    }
                </DivCarosel>
            </Div>
            }
        </>
    )
}

export default Carosuel