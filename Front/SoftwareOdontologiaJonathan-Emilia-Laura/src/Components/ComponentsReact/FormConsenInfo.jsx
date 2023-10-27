

const FormConsenInfo = () => {
  return (
    <div>
 <div className="container animate__animated animate__fadeInDown">
        <h1>FormConsenInfo</h1>
      <form>
  <div className="row mb-3">
    <label className="col-sm-2 col-xl-6 col-form-label">Rehabilitacion</label>
    <div className="col-sm-10 col-xl-6">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-sm-2 col-xl-6 col-form-label">Endodoncia</label>
    <div className="col-sm-10 col-xl-6">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-sm-2 col-xl-6 col-form-label">Periodoncia</label>
    <div className="col-sm-10 col-xl-6">
      <input type="password" className="form-control " id="inputPassword3"/>
    </div>
  </div>
</form>
</div>
    </div>
  )
}

export default FormConsenInfo