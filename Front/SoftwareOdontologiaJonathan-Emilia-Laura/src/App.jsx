//// Enrutador De todo
import {Routes,Route} from 'react-router-dom';
import './App.css'


//// Componentes
import Home from './Components/ComponentsReact/PerfilOdontologico/Home';
import FormConsenInfo from './Components/ComponentsReact/FormConsenInfo';
import Footer from './Components/ComponentsReact/Footer';
import Landing from './Components/ComponentsReact/Landing';
import HomeAdministrativo from './Components/ComponentsReact/PerfilAdminitrativo/HomeAdministrativo';


function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Landing/>} ></Route>
        <Route path="/ConsenInfor" element={<FormConsenInfo/>} ></Route>
        <Route path="/Home" element={<Home/>} ></Route>
        <Route path="/HomeAdministrativo" element={<HomeAdministrativo/>} ></Route>
    </Routes>
    {/*FOOTER */}
        <div>
          <Footer/>
      </div>
    </>
  )
}

export default App
