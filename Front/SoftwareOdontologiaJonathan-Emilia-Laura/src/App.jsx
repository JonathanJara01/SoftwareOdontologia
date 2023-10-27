//// Enrutador De todo
import {Routes,Route} from 'react-router-dom';
import './App.css'


//// Componentes
import Home from './Components/ComponentsReact/Home';
import FormConsenInfo from './Components/ComponentsReact/FormConsenInfo';
import Footer from './Components/ComponentsReact/Footer';


function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/ConsenInfor" element={<FormConsenInfo/>} ></Route>
    </Routes>
    {/*FOOTER */}
        <div>
          <Footer/>
      </div>
    </>
  )
}

export default App
