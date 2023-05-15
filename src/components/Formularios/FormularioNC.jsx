
import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import ContentTable from "../Table/Table";
import {v4 as uuidv4} from "uuid";
import { Api } from "../../api/ClienteService.js";
import { useState,useEffect } from "react"


const FormNuevaCategoria =()=>{

    const [titulo,setTitulo]=useState('');
    const [descripcion,setDescripcion]=useState('');
    const [colorPrimario,setColor]=useState('#000000');
    const [codigoS,setCodigoS]=useState('');
    const [categorias,setCategorias]= useState([])

    useEffect(()=>{
        const ConsultaApi=async()=>{
            const{data}= await Api.get("categorias");
            setCategorias(data)
        }
        ConsultaApi();
    },[])

    const EnviarDatos=async(e)=>{
        e.preventDefault()
        const datos ={
            id:uuidv4(),
            titulo,
            colorPrimario,
            descripcion,
            codigoS
        }
        await Api.post('categorias',datos);
        const{data}= await Api.get("categorias");
        setCategorias(data)
    }

    const EliminarCategoria=async(id)=>{
        await Api.delete(`categorias/${id}`);
        const{data}= await Api.get("categorias");
        setCategorias(data)
    }


    return(
        <Section>
            <Title>Nueva Categoría</Title>
            <Form onSubmit={EnviarDatos}>
                <Inputs 
                    tipo="text" 
                    titulo="titulo"
                    ActualizarValor={setTitulo}
                />
                <TextTarea 
                    titulo="Descripcion"
                    ActualizarDescrip={setDescripcion}
                />
                <Inputs 
                    tipo="color" 
                    titulo="color"
                    ActualizarValor={setColor}
                />
                <Inputs 
                    tipo="text" 
                    titulo="Codigo de seguridad"
                    ActualizarValor={setCodigoS}
                />

                <ContentBtns>
                    <div>
                        <Btn>Guadar</Btn>
                        <BtnLimpia type="reset" value="Limpiar" /> 
                    </div>
                </ContentBtns>
            </Form>
            <ContentTable categorias={categorias} EliminarCategoria={EliminarCategoria} />
        </Section>
    )
}


export default FormNuevaCategoria

