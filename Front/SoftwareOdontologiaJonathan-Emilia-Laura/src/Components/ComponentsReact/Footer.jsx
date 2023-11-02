import { NavLink } from "react-router-dom"


const Footer = () => {
    return (
      <div>
      <div className="row">
              <footer className="py-3 my-4">
                  <ul className="nav justify-content-center">
                      <li className="nav-item"><a href="#!" className="nav-link">Contactanos</a></li>
                      <li className="nav-item"><a href="#!" className="nav-link">Redes</a></li>
                      <NavLink className="nav-link" href="#"to='/Home'>HOME</NavLink>
                  </ul>
                  <p className="text-center text-muted">© 2023 Jonathan Jaramillo Zapata</p>
              </footer>
          </div>
      </div>
    )
  }
  
  export default Footer