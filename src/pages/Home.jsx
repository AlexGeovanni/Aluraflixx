import Principal from "../components/Principal/Principal"



const Home = (props)=>{
    const {equipos,categorias}= props
    
    return(
        <>
        <Principal equipos={equipos} categorias={categorias} />
        </>
    )
}

export default Home