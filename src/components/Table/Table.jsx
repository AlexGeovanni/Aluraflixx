import styled from "styled-components"
import { Td, Th } from "../UI"
import { Link } from "react-router-dom"

const Table = styled.table`
    border: 2px solid #fff;
    width: 100%;
    color: #fff;
    width: 100%;
    margin: auto;
    margin-top: 30px;
    @media screen and (min-width:1100px) {
        max-width: 95%;
        border: 4px solid #fff;
    }
`

const ThNombre = styled(Th)`
    width: 25%;
    
`
const TdAcciones=styled(Td)`
    text-align: center;
    cursor: pointer;
`
const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${({blue})=> blue? "rgba(42, 122, 228, 1)":"rgba(229, 57, 53, 1)"};
    border-radius: 4px;
    padding: 8px 0;
    /* pointer events para que no pueden eliminar nada sin autorizacion */
    /* pointer-events: none; */
    @media screen and (max-width:1100px) {
        gap: 5px;
    }
    @media screen and (max-width:768px) {
        gap: 5px;
        padding: 4px 5px;
    }
`
const H2 = styled.h2`
    font-size: 35px;
    font-weight: 400;
    @media screen and (max-width:1100px) {
        font-size:22px;
    }
    @media screen and (max-width:768px) {
        font-size:16px;
    }
`
const H3 = styled.h3`
    font-size: 22px;
    font-weight: 300;
    @media screen and (max-width:1100px) {
        font-size:17px;
    }
    @media screen and (max-width:768px) {
        font-size:12px;
    }
`

const Tr = styled.tr`
    :nth-last-child(odd){
        background-color: #000;
        /* border: 0px solid #000; */
    }
    :hover{
        background-color: #111010;
    }
`
const ContentTable =({Datos,EliminaDato,tipo})=>{
    
    return(
        <Table >
            <thead>
                <tr>
                    <ThNombre>
                        <H2>Nombre</H2>
                    </ThNombre>
                    <Th>
                        <H2>Descripcion</H2>
                    </Th>
                    <Th>
                        <H2>Editar</H2>
                    </Th>
                    <Th>
                        <H2>Remover</H2>
                    </Th>
                </tr>
            </thead>
            <tbody >
                {
                    Datos.map((element,i)=>{
                    return  <Tr key={i}>
                    <Td>
                        <H3>{element.titulo}</H3>
                    </Td>
                    <Td>
                        <H3>{`${element.descripcion.slice(0,90)}${element.urlVideo? "...":""}`}</H3>
                    </Td>
                    <TdAcciones>
                    <Link to={ tipo? "/ActualizarCategoria/"+ element.id:"/ActualizarVideo/"+element.id }>
                        <Div blue >
                            <H3>Editar</H3>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Div>
                    </Link>
                    </TdAcciones>
                    <TdAcciones >
                        <Div red  onClick={()=>EliminaDato(element.id)}>
                            <H3>Remover</H3>
                            <i className="fa-solid fa-trash"></i>
                        </Div>
                    </TdAcciones>
                </Tr>
                    })
                }
            </tbody>
        </Table>
    )
}


export default ContentTable