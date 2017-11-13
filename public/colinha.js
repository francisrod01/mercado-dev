// header interno
<nav className="navbar navbar-dark fixed-top bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/"><img alt="MercadoDev" src={logo2} height={80} /></Link>
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

// container
<div className="container" style={{ paddingTop: '120px'}}></div>

// header home
<div className="jumbotron">
<div className="container">
  <h1 className="display-3 text-center"><img src={logo} className="App-logo" alt="logo" width="200" /></h1>
  <p className="text-center"><Link className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Anuncie Grátis &raquo;</Link></p>
</div>
</div>

// anuncio home

<div className="col-lg-4 col-md-6 mb-4">
<div className="card h-100">
  <a href="#"><img className="card-img-top" src="http://placehold.it/200x140" alt="" /></a>
  <div className="card-body">
    <h4 className="card-title">
      <Link to={`/anuncios/ver/`}>nome</Link>
    </h4>
    <h5>preco</h5>
    <p className="card-text">descricao</p>
  </div>
</div>
</div>

// categoria home
<Link to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
<i className={`fa  fa-4x`} aria-hidden="true"></i><br />
categoria
</Link>

// footer
<footer className="py-5 bg-dark mt-4">
<div className="container">
  <p className="m-0 text-center text-white">Copyright &copy; DevPleno.com 2017</p>
</div>
</footer>