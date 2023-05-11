import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import { Link } from "react-router-dom";




const FormNuevoVideo =()=>{
    return(
        <Section>
            <Title>Nuevo Video</Title>
            <Form>
                <Inputs tipo="text" titulo="Titulo"/>
                <Inputs tipo="text" titulo="Link del video"/>
                <Inputs tipo="text" titulo="Link del imagen del video"/>
                <Inputs tipo="text" titulo="Escoja una categoria"/>
                <TextTarea titulo="Descripcion" />
                <Inputs tipo="text" titulo="Codigo de seguridad"/>

                <ContentBtns>
                    <div>
                        <Btn>Guadar</Btn>
                        <BtnLimpia>Limpar</BtnLimpia>
                    </div>
                    <Link to="/FormNuevaCategoria" ><Btn>Nueva Categoria</Btn></Link>
                </ContentBtns>
            </Form>
        </Section>
    )
}


export default FormNuevoVideo