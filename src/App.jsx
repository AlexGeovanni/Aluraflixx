import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import GlobalStyle from './globalStyle'

import { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import NuevoVideo from './pages/NuevoVideo'
import NuevaCategoria from './pages/NuevaCategoria';
import ActualizarVideo from './pages/ActualizarVideo'


function App() {
    return (
    <>
    <GlobalStyle />
    <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home  />} />
            <Route exact path='/NuevoVideo' element={<NuevoVideo  />} />
            <Route exact path='/NuevaCategoria' element={<NuevaCategoria />} />
            <Route exact path='/ActualizarVideo/:categoriId' element={<ActualizarVideo/>} />
        </Routes>
    </Router>
    <Footer />
    </>
)
}

export default App
