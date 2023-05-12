import styled from "styled-components"
import { motion } from "framer-motion"
import { DivImg, Img } from "../UI"
import { useEffect,useState,useRef } from "react"


const Div =styled(motion.div)`
    margin-top: 50px;
    overflow: hidden;
    cursor: grab;
`
const DivCarosel = styled(motion.div)`
    display: flex;
    gap: 15px;
`

const Imgc =styled(Img)`
    width: 400px;
    pointer-events: none;
`

const Carosuel =()=>{
    const carousel = useRef();
    const [width,setWidth]=useState(0)
    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])


    return(
        <Div ref={carousel} whileTap={{cursor:"grabbing"}}>
            <DivCarosel 
            drag="x" 
            dragConstraints={{right:0, left:-width}}
            >
                <DivImg>
                    <Imgc src="https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ" />
                </DivImg>
                <DivImg>
                    <Imgc src="https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ" />
                </DivImg>
                <DivImg>
                    <Imgc src="https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ" />
                </DivImg>
                <DivImg>
                    <Imgc src="https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ" />
                </DivImg>
                <DivImg>
                    <Imgc src="https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ" />
                </DivImg>
            </DivCarosel>
        </Div>
    )
}

export default Carosuel