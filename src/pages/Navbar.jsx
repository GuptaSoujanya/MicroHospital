import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="hero_area">
    <header className="header_section">
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/logo.png" alt=""/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item ">
                    <Link to="/"><a className="nav-link">Home<span className="sr-only">(current)</span></a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about"><a className="nav-link"> About</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/treatment"><a className="nav-link">Treatment</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/doctor"><a className="nav-link">Doctors</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/chatbot"><a className="nav-link">Chat With Us</a></Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/contact"><a className="nav-link">Contact Us</a></Link>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container">
                <Link to="/Login"><a href="">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Login
                  </span>
                </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </div>
    </div>
  )
}

export default Navbar
