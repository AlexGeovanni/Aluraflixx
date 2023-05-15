import styled from "styled-components"
import { Td, Th } from "../UI"


const Table = styled.table`
    border: 4px solid #fff;
    max-width: 95%;
    color: #fff;
    width: 100%;
    margin: auto;
    margin-top: 30px;
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
    pointer-events: none;
`

const H2 = styled.h2`
    font-size: 35px;
    font-weight: 400;
`
const H3 = styled.h3`
    font-size: 22px;
    font-weight: 300;
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

const ContentTable =({categorias,EliminarCategoria})=>{
    
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
                    categorias.map(({titulo,descripcion,id},i)=>{
                    return  <Tr key={i}>
                    <Td>
                        <H3>{titulo}</H3>
                    </Td>
                    <Td>
                        <H3>{descripcion}</H3>
                    </Td>
                    <TdAcciones>
                        <Div blue  onClick={()=>alert("edit")}>
                            <H3>Editar</H3>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Div>
                    </TdAcciones>
                    <TdAcciones >
                        <Div red  onClick={()=>EliminarCategoria(id)}>
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