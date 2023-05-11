import './App.css'
import Footer from './components/Footer/Footer'
import FormNuevaCategoria from './components/Formularios/FormularioNC'
import FormNuevoVideo from './components/Formularios/FormularioNV'
import Header from './components/Header/Header'
import GlobalStyle from './globalStyle'
import Principal from './components/Principal/Principal'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <>
    <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/FormNuevoVideo' element={<FormNuevoVideo />} />
          <Route path='/FormNuevaCategoria' element={<FormNuevaCategoria />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
