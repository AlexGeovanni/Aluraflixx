import { Api } from "../api/ClienteService.js";
import FormNuevoVideo from "../components/Formularios/FormularioNV"
import { useEffect,useState } from "react";


const NuevoVideo =()=>{
    const [categorias,setCategorias]= useState([])

    useEffect(()=>{
        const ConsultaCategoria=async()=>{
            const {data} = await Api.get('categorias');
            setCategorias(data)
        }
        ConsultaCategoria();
    },[])
    
    return(
    <>
        <FormNuevoVideo categorias={categorias.map((categoria)=> categoria.titulo)} />
    </>)
}

export default NuevoVideo;