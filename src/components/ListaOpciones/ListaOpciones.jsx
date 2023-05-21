import { ContentInput,Input,Span } from "../UI";
import styled from "styled-components";

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 28px 10px;
    outline: none;
    border: none;
    background: rgba(83, 88, 93, 1);
    color: #fff;
    option{
        background-color: #000000;
    }
`


const ListaOpciones =(props)=>{
    const {categorias,ActualizarCategoria,valor}= props;
    const CambioValor=(e)=>{
        ActualizarCategoria(e.target.value)
    }
    return(
        <ContentInput>
            <Select  onChange={CambioValor}>
                {valor?  <option value={valor}>{valor}</option >: <option value="" defaultValue="" hidden>Escoja una categoria</option> }
               
                {
                    categorias.map((titulo)=>{
                        if(titulo != valor)
                            return <option key={titulo}>{titulo}</option>
                    })
                }
            </Select>
        </ContentInput>
    )
}

export default ListaOpciones;