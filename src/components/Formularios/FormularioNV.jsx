import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import { Link } from "react-router-dom";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import { useState,useEffect } from "react";
import { Api } from "../../api/ClienteService.js";
import {v4 as uuidv4} from "uuid"
import styled from "styled-components";
import ContentTable from "../Table/Table";
import Loader from "../Loader/Loader";

const DivAcciones =styled.div`
    @media screen and (max-width: 768px){
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`






const FormNuevoVideo =(props)=>{
    const [titulo,setTitulo]=useState('');
    const [urlVideo,setUrlVideo]=useState('');
    const [urlImg,setUrlImg]=useState('https://i.ytimg.com/vi//maxresdefault.jpg');
    const [categoria,setCategoria]=useState('');
    const [descripcion,setDescripcion]=useState('');
    const [codigoS,setCodigoS]=useState('');
    
    const [videos,setVideos]= useState([])

    const [loading,setLoading]= useState(false)

    // carga la cosulta de todas la cetegorias para luego ser mostrado en la tabla
    useEffect(()=>{
        const ConsultaApi=async()=>{
            const res= await Api.get("videos");
            if(res.status==200){
                setVideos(res.data);
                setTimeout(()=>{
                    setLoading(true)
                },2500)
            }
        }
        ConsultaApi();
    },[])


    const EnviarDatos=async(e)=>{
        e.preventDefault()
        const datos ={
            id:uuidv4(),
            titulo,
            urlVideo,
            urlImg,
            categoria,
            descripcion,
            codigoS
        }
        const post = await Api.post("videos",datos);
        if(post.status==201){
            setLoading(false)
            const res= await Api.get("videos");
            setVideos(res.data)
            setTimeout(()=>{
                setLoading(true)
            },2500)
        }
    }

    const EliminarVideo = async(id)=>{
        await Api.delete(`videos/${id}`);
        const {data}= await Api.get("videos");
        setVideos(data) 
    }

    const resetText =()=>{
        setTitulo('')
        setDescripcion('')
        setUrlVideo('')
        setCodigoS('')
    }
    const url =(urlV)=>{
        const img = urlV.slice(-11)
        setUrlVideo(urlV)
        setUrlImg(`https://i.ytimg.com/vi/${img}/maxresdefault.jpg`);
        return null
    }
    return(
        <Section>
            <Title>Nuevo Video</Title>
            <Form onSubmit={EnviarDatos}>
                <Inputs 
                    tipo="text" 
                    titulo="Titulo"
                    valor={titulo}
                    ActualizarValor={setTitulo}
                />
                <Inputs
                    tipo="text" 
                    titulo="Link del video"
                    valor={urlVideo}
                    ActualizarValor={url}
                />
                <Inputs 
                    tipo="text" 
                    titulo="Link del imagen del video"
                    valor={urlImg}
                />
                <ListaOpciones 
                    categorias={props.categorias} 
                    valor={categoria}
                    ActualizarCategoria={setCategoria}
                />
                <TextTarea 
                    titulo="Descripcion"  
                    ActualizarDescrip={setDescripcion}
                />
                <Inputs 
                    tipo="text" 
                    titulo="Codigo de seguridad"
                    valor={codigoS}
                    ActualizarValor={setCodigoS}
                />

                <ContentBtns>
                    <DivAcciones>
                        <Btn>Guadar</Btn>
                        <BtnLimpia type="reset" value="Limpiar" onClick={resetText} /> 
                    </DivAcciones>
                    <Link to="/NuevaCategoria" ><Btn>Nueva Categoria</Btn></Link>
                </ContentBtns>
            </Form>
            {loading?  <ContentTable Datos={videos} EliminaDato={EliminarVideo} /> :<Loader />}
        </Section>
    )
}


export default FormNuevoVideo