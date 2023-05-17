import Principal from "../components/Principal/Principal"
import { useState,useEffect } from "react"
import { Api } from "../api/ClienteService.js"

const Home = ()=>{

    const [categorias,setCategoria]= useState([]);
    const [equipos,setEquipos]= useState([]);
    
    useEffect(()=>{
            const Post =async()=>{
                const equipo =await Api.get("videos");
                const categoria = await Api.get("categorias")
                if(equipo.status === 200 && categoria.status === 200){
                    setEquipos(equipo.data);
                    setCategoria(categoria.data)
                }
                
            }
            Post()
    },[])



    return(
        <>
        <Principal equipos={equipos} categorias={categorias}  />
        </>
    )
}

export default Home