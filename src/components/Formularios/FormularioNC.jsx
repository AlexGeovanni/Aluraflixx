
import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import ContentTable from "../Table/Table";
import { useState } from "react";


const FormNuevaCategoria =()=>{

    const [nombre,setNombre]=useState('');
    const [descripcion,setDescripcion]=useState('');
    const [color,setcolor]=useState('');
    const [codigoS,setCodigoS]=useState('');

    const EnviarDatos=(e)=>{
        e.preventDefault()
        const datos ={
            nombre,
            color,
            descripcion,
            codigoS
        }
        console.log(datos)
    }

    return(
        <Section>
            <Title>Nueva Categoría</Title>
            <Form onSubmit={EnviarDatos}>
                <Inputs 
                    tipo="text" 
                    titulo="Nombre"
                    ActualizarValor={setNombre}
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