import React from 'react';



const Landing = () => {



  return (
    <div>
<h1>Hola Soy Landing</h1>
{/* <!-- Pills navs --> */}
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Iniciar Sesión</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Registrarse</a>
  </li>
</ul>
{/* <!-- Pills navs --> */}

{/* <!-- Pills content --> */}
<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3">
        <p>Ingresa Con:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>

      <p className="text-center">O:</p>

      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input type="email" id="loginName" className="form-control" />
        <label className="form-label" htmlFor="loginName">Email O Nombre De Usuario</label>
      </div>

     {/*  <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control" />
        <label className="form-label" htmlFor="loginPassword">Contraseña</label>
      </div>

  {/*     <!-- 2 column grid layout --> */}
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div className="form-check mb-3 mb-md-0">
            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label className="form-check-label" htmlFor="loginCheck"> Recuerdame </label>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          {/* <!-- Simple link --> */}
          <a href="#!">Olvidaste La Contraseña?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-4">Inicia con</button>

     {/*  <!-- Register buttons --> */}
      <div className="text-center">
        <p>No Recuerdas? <a href="#!">Registrar</a></p>
      </div>
    </form>
  </div>
  <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div className="text-center mb-3">
        <p>Iniciar Con:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>

      <p className="text-center">O:</p>

      {/* <!-- Name input --> */}
      <div className="form-outline mb-4">
        <input type="text" id="registerName" className="form-control" />
        <label className="form-label" htmlFor="registerName">Nombre</label>
      </div>

     {/*  <!-- Username input --> */}
      <div className="form-outline mb-4">
        <input type="text" id="registerUsername" className="form-control" />
        <label className="form-label" htmlFor="registerUsername">Nombre De Usuario</label>
      </div>

    {/*   <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input type="email" id="registerEmail" className="form-control" />
        <label className="form-label" htmlFor="registerEmail">Email</label>
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" id="registerPassword" className="form-control" />
        <label className="form-label" htmlFor="registerPassword">Contraseña</label>
      </div>

      {/* <!-- Repeat Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" className="form-control" />
        <label className="form-label" htmlFor="registerRepeatPassword">Repetir Contraseña</label>
      </div>

      {/* <!-- Checkbox --> */}
      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label className="form-check-label" htmlFor="registerCheck">
          He leido y he aceptado los terminos y condiciones
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-3">Iniciar</button>
    </form>
  </div>
</div>
{/* <!-- Pills content --> */}

    </div>
  )
};

export default Landing


