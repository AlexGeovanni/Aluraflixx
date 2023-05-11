
import { Btn,BtnLimpia,ContentBtns,Title,Section,Form } from "../UI";
import Inputs from "../Campos/Inputs";
import TextTarea from "../Campos/Textarea";
import ContentTable from "../Table/Table";


const FormNuevaCategoria =()=>{
    return(
        <Section>
            <Title>Nueva Categoría</Title>
            <Form>
                <Inputs tipo="text" titulo="Nombre"/>
                <TextTarea titulo="Descripcion" />
                <Inputs tipo="color" titulo="color"/>
                <Inputs tipo="Codigo de seguridad" titulo="Codigo de seguridad"/>

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