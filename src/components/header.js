import React from 'react';

const Header = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  
        <div className="container-fluid ">
          <a className="navbar-brand w-25 text-center fs-4 fw-bold "  style={{color:"#64db21"}} href="/"> MOTHILAL SANJAY</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar" 
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body w-75 fs-5 fw-semibold">
              <ul className="navbar-nav justify-content-evenly flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              </ul>
            </div>
          </div>
          </div>
          
      </nav>
    </header>
  );
};

export default Header;
