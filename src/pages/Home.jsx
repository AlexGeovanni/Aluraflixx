import Principal from "../components/Principal/Principal"
import { useState,useEffect } from "react"
import { Api } from "../api/ClienteService.js"
import Loader from "../components/Loader/Loader";

const Home = ()=>{

    const [categorias,setCategoria]= useState([]);
    const [equipos,setEquipos]= useState([]);
    const [loading,setLoading]= useState(false)
    
    useEffect(()=>{
            const Get =async()=>{
                const equipo =await Api.get("videos")
                const categoria = await Api.get("categorias");
                if(equipo.status === 200 && categoria.status === 200){
                    setEquipos(equipo.data);
                    setCategoria(categoria.data)
                    setTimeout(()=>{
                        setLoading(true)
                    },1000)
                }
            }
            Get()
    },[])



    return(
        <>
            {
                loading ?  <Principal equipos={equipos} categorias={categorias}  /> :<Loader />
            }
            
        </>
    )
}

export default Home