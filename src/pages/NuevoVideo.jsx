import FormNuevoVideo from "../components/Formularios/FormularioNV"


const NuevoVideo =(props)=>{
    return(
    <>
        <FormNuevoVideo categorias={props.categorias} />
    </>)
}

export default NuevoVideo;