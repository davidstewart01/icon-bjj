import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Icon BJJ</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Log In</a>
              </li> */}
              
              <li className="nav-item">
                <Link className="nav-link" to="#">Chokes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Escapes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Submissions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/syllabus">Syllabus</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    </>
  );
}

export default Header;
