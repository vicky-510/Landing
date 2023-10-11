import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/image/logo.jpg';

import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top portfolio-navbar" style={{ color: '#182C61', paddingTop: '5px', paddingBottom: '5px' }}>
  <div className="container">
    <Link to="/" className="navbar-brand d-flex align-items-center justify-content-center justify-content-lg-start">
      <img src={logo} className="img-fluid" style={{ maxHeight: '60px', mixBlendMode: 'multiply', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ padding: '15px' }}>
      <span className="navbar-toggler-icon" style={{ backgroundColor: '#182C61', borderRadius: '5px' }}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto align-items-center justify-content-center justify-content-lg-start">

        <li className="nav-item">
          <Link to="/#Home" className="nav-link" id="nav" smooth>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Projects" className="nav-link" smooth>
            Projects
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/login" className="nav-link" style={{ backgroundColor: '#45aaf2', fontWeight: 500, color: 'white', padding: '8px 16px', borderRadius: '5px', letterSpacing: '1px' }}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header