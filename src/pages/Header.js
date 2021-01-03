
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Icon BJJ</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Log In</a>
              </li> */}
              
              <li className="nav-item">
                <a className="nav-link" href="#">Chokes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Escapes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Submissions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Syllabus</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading mb-0">Icon BJJ Belfast</h1>
            <h2 className="masthead-subheading mb-0">Resources</h2>
            <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Syllabus</a>
          </div>
        </div>
      </header>      
    </>
  );
}

export default Header;
