
import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import ContentTable from "../Table/Table";
import {v4 as uuidv4} from "uuid";
import { Api } from "../../api/ClienteService.js";
import { useState,useEffect } from "react"
import Loader from "../Loader/Loader";


const FormNuevaCategoria =()=>{
    
    // guardar los valores de los inputs y textos
    const [titulo,setTitulo]=useState('');
    const [descripcion,setDescripcion]=useState('');
    const [colorPrimario,setColor]=useState('#000000');  // inicializamos el colore negro por default
    const [codigoS,setCodigoS]=useState('');

    const [categorias,setCategorias]= useState([]);

    const [loading,setLoading]= useState(false);

    // carga la cosulta de todas la cetegorias para luego ser mostrado en la tabla
    useEffect(()=>{
        const ConsultaApi=async()=>{
            const res= await Api.get("categorias");
            if(res.status==200){ 
                setCategorias(res.data)
                setTimeout(()=>{
                    setLoading(true)
                },2500)
            }
        }
        ConsultaApi();
    },[])

    /* capturamos los datos y lo enviamos para nuevo dato, se vuelve hacer la cosulta para
|       actualizar las categorias*/
    const EnviarDatos=async(e)=>{
        e.preventDefault();
        const data ={
            id:uuidv4(),
            titulo,
            colorPrimario,
            descripcion,
            codigoS
        }
        const post = await Api.post('categorias',data);
        if(post.status==201){
            const res= await Api.get("categorias");
            setCategorias(res.data) 
        }
    }

    // eliminamos una categoria
    const EliminarCategoria = async(id)=>{
        await Api.delete(`categorias/${id}`);
        const {data}= await Api.get("categorias");
        setCategorias(data) 
    }

    // Limpia todos los inputs
    const resetText =()=>{
        setTitulo('')
        setDescripcion('')
        setColor('#000000')
        setCodigoS('')
    }


    return(
        <Section>
            <Title>Nueva Categoría</Title>
            <Form onSubmit={EnviarDatos}>
                <Inputs 
                    tipo="text" 
                    titulo="titulo"
                    valor={titulo}
                    ActualizarValor={setTitulo}
                />
                <TextTarea 
                    titulo="Descripcion"
                    ActualizarDescrip={setDescripcion}
                    valor={descripcion}
                />
                <Inputs 
                    tipo="color" 
                    titulo="color"
                    ActualizarValor={setColor}
                    valor={colorPrimario}

                />
                <Inputs 
                    tipo="text" 
                    titulo="Codigo de seguridad"
                    ActualizarValor={setCodigoS}
                    valor={codigoS}
                />

                <ContentBtns>
                    <div>
                        <Btn>Guadar</Btn>
                        <BtnLimpia type="reset" value="Limpiar" onClick={resetText} /> 
                    </div>
                </ContentBtns>
            </Form>
            {loading? <ContentTable Datos={categorias} EliminaDato={EliminarCategoria}  tipo={true} />: <Loader />}
        </Section>
    )
}

export default FormNuevaCategoria

