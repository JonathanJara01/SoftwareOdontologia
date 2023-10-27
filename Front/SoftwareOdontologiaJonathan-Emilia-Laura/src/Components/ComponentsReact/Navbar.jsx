
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-4">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" href="#" to='/'>OSoft</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
{/*               <li className="nav-item">
                <NavLink className="nav-link" href="#" to='/BasesDeDatos'>Bases De Datos</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" href="#" to='/Perfiles'>Perfiles</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#"to='/Pagos'>Pagos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#"to='/ConsenInfor'>Consentimientos Informados</NavLink>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#">ADMIN</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar