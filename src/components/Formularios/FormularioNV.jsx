import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import { Link } from "react-router-dom";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import { useState } from "react";
import { Api } from "../../api/ClienteService.js";
import {v4 as uuidv4} from "uuid"


const FormNuevoVideo =(props)=>{
    const [titulo,setTitulo]=useState('');
    const [urlVideo,setUrlVideo]=useState('');
    const [urlImg,setUrlImg]=useState('');
    const [categoria,setCategoria]=useState('');
    const [descripcion,setDescripcion]=useState('');
    const [codigoS,setCodigoS]=useState('');

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
        await Api.post("videos",datos);
    }


    return(
        <Section>
            <Title>Nuevo Video</Title>
            <Form onSubmit={EnviarDatos}>
                <Inputs 
                    tipo="text" 
                    titulo="Titulo"
                    ActualizarValor={setTitulo}
                />
                <Inputs
                    tipo="text" 
                    titulo="Link del video"
                    ActualizarValor={setUrlVideo}
                />
                <Inputs 
                    tipo="text" 
                    titulo="Link del imagen del video"
                    ActualizarValor={setUrlImg}
                />
                <ListaOpciones 
                    categorias={props.categorias} 
                    ActualizarCategoria={setCategoria}
                />
                <TextTarea 
                    titulo="Descripcion"  
                    ActualizarDescrip={setDescripcion}
                />
                <Inputs 
                    tipo="text" 
                    titulo="Codigo de seguridad"
                    ActualizarValor={setCodigoS}
                />

                <ContentBtns>
                    <div>
                        <Btn>Guadar</Btn>
                        <BtnLimpia>Limpar</BtnLimpia>
                    </div>
                    <Link to="/NuevaCategoria" ><Btn>Nueva Categoria</Btn></Link>
                </ContentBtns>
            </Form>
        </Section>
    )
}


export default FormNuevoVideo