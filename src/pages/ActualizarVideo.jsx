import { useParams,Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { Api } from "../api/ClienteService";
import { Btn, BtnLimpia, ContentBtns, Form, Section, Title } from "../components/UI";
import Inputs from "../components/Campos/Inputs";
import TextTarea from "../components/Campos/Textarea";
import ListaOpciones from "../components/ListaOpciones/ListaOpciones";

const ActualizarVideo=()=>{
    const {videoId} = useParams();
    const [categorias,setCategorias]= useState([])
    const [validador,setValidador]=useState(true)

    const [titulo,setTitulo]=useState('');
    const [urlVideo,setUrlVideo]=useState('');
    const [urlImg,setUrlImg]=useState('');
    const [categoria,setCategoria]=useState('');
    const [descripcion,setDescripcion]=useState('');
    const [codigoS,setCodigoS]=useState('');

    useEffect(()=>{
        const Detalle = async(id)=>{
            const datos = await Api.get(`videos/${id}`)
            const {data} = await Api.get('categorias')
            if(datos.status === 200){
                    setCategorias(data)
                    setTitulo(datos.data.titulo);
                    setUrlVideo(datos.data.urlVideo);
                    setUrlImg(datos.data.urlImg);
                    setCategoria(datos.data.categoria);
                    setDescripcion(datos.data.descripcion);
                    setCodigoS(datos.data.codigoS)
                }
            }
            Detalle(videoId);
    },[videoId])

    const url =(urlV)=>{
        const img = urlV.slice(-11)
        setUrlVideo(urlV)
        setUrlImg(`https://i.ytimg.com/vi/${img}/maxresdefault.jpg`);
        return null
    }

    const ActualizarDatos=async(e)=>{
        e.preventDefault()
        const datos ={
            titulo,
            urlVideo,
            urlImg,
            categoria,
            descripcion,
            codigoS
        }
        try {
            await Api.patch(`videos/${videoId}`,datos);
            setValidador(false)
        } catch (error) {
            console.log(error)
        }
    }
    
    const resetText =()=>{
        setTitulo('')
        setDescripcion('')
        setColor('#000000')
        setCodigoS('')
    }
    return(
        <Section>
            <Title>Actualizar Video</Title>
            <Form onSubmit={ActualizarDatos}>
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
                    categorias={categorias.map((categoria)=> categoria.titulo)}
                    valor={categoria}
                    ActualizarCategoria={setCategoria}
                />
                <TextTarea
                    titulo="Descripcion"  
                    valor={descripcion}
                    ActualizarDescrip={setDescripcion}
                />
                <Inputs 
                    tipo="text" 
                    titulo="Codigo de seguridad"
                    valor={codigoS}
                    ActualizarValor={setCodigoS}
                />
                 <ContentBtns>
                <div>
                    <Btn>Actualizar</Btn> 
                    {validador? <BtnLimpia type="reset" value="Limpiar" onClick={resetText} /> : <Navigate to={"/NuevoVideo"} />}
                </div>
            </ContentBtns>
            </Form>
        </Section>
    )

}

export default ActualizarVideo;