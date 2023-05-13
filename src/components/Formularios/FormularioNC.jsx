
import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import ContentTable from "../Table/Table";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { Api } from "../../api/ClienteService.js";

const FormNuevaCategoria =()=>{

    const [titulo,setTitulo]=useState('');
    const [descripcion,setDescripcion]=useState('');
    const [color,setcolor]=useState('');
    const [codigoS,setCodigoS]=useState('');

    const EnviarDatos=async(e)=>{
        e.preventDefault()
        const datos ={
            id:uuidv4(),
            titulo,
            color,
            descripcion,
            codigoS
        }
        await Api.post('categorias',datos)
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
                    ActualizarValor={setcolor}
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
                </ContentBtns>
            </Form>
            <ContentTable />

        </Section>
    )
}


export default FormNuevaCategoria

/*
{
      "titulo": "Front End",
      "colorPrimario": "#6BD1FF"
    },
    {
      "titulo": "Back End",
      "colorPrimario": "#00C86F"
    },
    {
      "titulo": "Mobil",
      "colorPrimario": "#FFBA05"
    },
    {
      "titulo": "Infraestructura",
      "colorPrimario": "#9CD33B"
    },
    {
      "titulo": "Data Science",
      "colorPrimario": "#9CD33B"
    },
    {
      "titulo": "Design & UX",
      "colorPrimario": "#DC6EBE"
    },
    {
        "titulo": "Marketing Digital",
        "colorPrimario": "#6B5BE2"
    },
    {
        "titulo": "Innovación y Gestión",
        "colorPrimario": "#FF8C2A"
    }
*/