import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import GlobalStyle from './globalStyle'

import { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import NuevoVideo from './pages/NuevoVideo'
import NuevaCategoria from './pages/NuevaCategoria';
import ActualizarCategoria from './pages/ActualizarCategoria'
import ActualizarVideo from './pages/ActualizarVideo'


function App() {
    const [equipos,setEquipos]= useState([
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ",
        categoria:"Front End",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/rpvrLaBQwgg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJK_72imvkPUftCR6i52lfmAwR2A",
        categoria:"Front End",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/t-iqt1b2qqk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvHzi_mOtKXBpQWhCpa0KUn52vow",
        categoria:"Back End",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/GJfOSoaXk4s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKpxz6vMwTw26HQyprrrwHFadQ2g",
        categoria:"Front End",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/cLLKVd5CNLc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoAq6RVkWNnROKxhWbny5h0GbMwA",
        categoria:"Back End",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/UuAX5azcvDQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIgMyXxVqSIC310Cq0_iicekvCkQ",
        categoria:"Front End",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/EoPvlE85XAQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPs_pZWDQJClLViVgQYyfBgD8qkw",
        categoria:"Back End",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/vhwspfvI52k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB69jh2_4uiilDUzFYKS6IZMQh5Ag",
        categoria:"Innovación y Gestión",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/G1cDRqKuxpg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEwV2ndlV0y65IJ71gQVC8d9VKxg",
        categoria:"Back End",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/YhR7Zp8NUzE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6UTsxfxASIvP5FfJBLJcV7Fykuw",
        categoria:"Innovación y Gestión",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/6N3OkLCfK-0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDq1E4lzcafq884jsP44Nu4YGTDg",
        categoria:"Innovación y Gestión",
        descripcion:"",
        codigoS:""
    },
    {
        urlVideo:"",
        urlImg:"https://i.ytimg.com/vi/_zYbZ5S0VMw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3jN7HRrXJqNgydVEh5dgiO6jEBA",
        categoria:"Innovación y Gestión",
        descripcion:"",
        codigoS:""
    }
]);
const [categorias,setCategorias] =useState([
{
    titulo:"Front End",
    colorPrimario:"#6BD1FF"
},
{
    titulo:"Back End",
    colorPrimario:"#00C86F"
},
{
    titulo:"Mobil",
    colorPrimario:"#FFBA05"
},
{
    titulo:"Infraestructura",
    colorPrimario:"#9CD33B"
},
{
    titulo:"Data Science",
    colorPrimario:"#9CD33B"
},
{
    titulo:"Design & UX",
    colorPrimario:"#DC6EBE"
},
{
    titulo:"Marketing Digital",
    colorPrimario:"#6B5BE2"
},
{
    titulo:"Innovación y Gestión",
    colorPrimario:"#FF8C2A"
}
]);

    return (
    <>
    <GlobalStyle />
    <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home  />} />
            <Route exact path='/NuevoVideo' element={<NuevoVideo  />} />
            <Route exact path='/NuevaCategoria' element={<NuevaCategoria />} />
            <Route exact path='/ActualizarCategoria/:categoriId' element={<ActualizarCategoria/>} />
            <Route exact path='/ActualizarVideo/:videoId' element={<ActualizarVideo />} />
        </Routes>
    </Router>
    <Footer />
    </>
)
}

export default App
