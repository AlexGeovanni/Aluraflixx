
// import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../components/UI"; 
import Inputs from "../components/Campos/Inputs";
import TextTarea from "../components/Campos/Textarea";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Api } from "../api/ClienteService";

const ActualizarVideo=()=>{
    const { categoriId}=useParams();

    const [titulo,setTitulo]=useState(' ');
    const [descripcion,setDescripcion]=useState(' ');
    const [colorPrimario,setColor]=useState(' ');
    const [codigoS,setCodigoS]=useState(' ');

    useEffect(()=>{
        const Detalle = async(id)=>{
            const datos = await Api.get(`categorias/${id}`)
            if(datos.status === 200){
                    setTitulo(datos.data.titulo);
                    setDescripcion(datos.data.descripcion);
                    setColor(datos.data.colorPrimario);
                    setCodigoS(datos.data.codigoS)
                }
            }
            Detalle(categoriId);
    },[categoriId])

    const ActualizarDatos=async(e)=>{
        e.preventDefault()
        const datos ={
            titulo,
            colorPrimario,
            descripcion,
            codigoS
        }
        await Api.patch(`categorias/${categoriId}`,datos);
    }

    const resetText =()=>{
        setTitulo('')
        setDescripcion('')
        setColor('')
        setCodigoS('')
    }
    
    return(
        <Section>
        <Title>Actualizar Video</Title>
        <Link to={"/NuevaCategoria"}><p style={{color:"white"}}>Volver</p></Link>
        <Form onSubmit={ActualizarDatos} >
            <Inputs 
                tipo="text" 
                titulo="titulo"
                valor={titulo}
                ActualizarValor={setTitulo}
            />
            <TextTarea 
                titulo="Descripcion"
                valor={descripcion}
                ActualizarDescrip={setDescripcion}
            />
            <Inputs 
                tipo="color" 
                titulo="color"
                valor={colorPrimario}
                ActualizarValor={setColor}
            />
            <Inputs 
                tipo="text" 
                titulo="Codigo de seguridad"
                valor={codigoS}
                ActualizarValor={setCodigoS}
            />

            <ContentBtns>
                <div>
                    {/* <Link to={"/NuevaCategoria"} > */}
                        <Btn>Actualizar</Btn>
                    {/* </Link> */}
                    <BtnLimpia type="reset" value="Limpiar" onClick={resetText} /> 
                </div>
            </ContentBtns>
        </Form>
    </Section>
    )
}

export default ActualizarVideo;