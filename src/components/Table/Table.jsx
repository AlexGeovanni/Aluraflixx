import styled from "styled-components"
import { Td, Th } from "../UI"

const Table = styled.table`
    border: ${({Bdnegro})=> Bdnegro? "4px solid #000": "4px solid #fff"};
    max-width: 95%;
    color: #fff;
    width: 100%;
    margin: auto;
    margin-top: 30px;
`
const ThNombre = styled(Th)`
    width: 25%;
`
const ThAcciones = styled(Th)`
    width: 12%;
`
const H2 = styled.h2`
    font-size: 35px;
    font-weight: 400;
`
const H3 = styled.h3`
    font-size: 22px;
    font-weight: 300;
`


const ContentTable =(props)=>{
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
                    <ThAcciones>
                        <H2>Editar</H2>
                    </ThAcciones>
                    <ThAcciones>
                        <H2>Remover</H2>
                    </ThAcciones>
                </tr>
            </thead>
            <tbody >
                <tr>
                <ThNombre Bdnegro>
                        <H3>Nombre</H3>
                    </ThNombre>
                    <Th Bdnegro>
                        <H3>Descripcion</H3>
                    </Th>
                    <ThAcciones Bdnegro>
                        <H3>Editar</H3>
                    </ThAcciones>
                    <ThAcciones Bdnegro>
                        <H3>Remover</H3>
                    </ThAcciones>
                </tr>
                <tr>
                <ThNombre Bdnegro>
                        <H3>Nombre</H3>
                    </ThNombre>
                    <Th Bdnegro>
                        <H3>Descripcion</H3>
                    </Th>
                    <ThAcciones Bdnegro>
                        <H3>Editar</H3>
                    </ThAcciones>
                    <ThAcciones Bdnegro>
                        <H3>Remover</H3>
                    </ThAcciones>
                </tr>
            </tbody>
        </Table>
    )
}


export default ContentTable