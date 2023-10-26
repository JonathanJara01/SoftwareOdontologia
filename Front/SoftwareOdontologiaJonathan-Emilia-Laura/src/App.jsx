//// Enrutador De todo
import {Routes,Route} from 'react-router-dom';
import './App.css'


//// Componentes
import Home from './Components/ComponentsReact/Home';

function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
    </Routes>
    </>
  )
}

export default App
