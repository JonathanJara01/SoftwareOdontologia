//Componentes
import Navbar from '../Navbar'

// imagenes
import LogoOdon from '../../Images/LogoOdontoSoft.png';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
                {/*Menu Principal */}
    <div className='container animate__animated animate__fadeInDown'>
    <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={LogoOdon} alt="logoSoftwareOdonto" className='img-fluid rounded-5'/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1 className="text-center">OdontoSoft</h1>
            <Navbar/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home