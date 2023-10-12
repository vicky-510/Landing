import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/image/logo_2.gif';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = 1; 

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: 'white',marginTop:'0px',paddingTop:'0px',fontFamily:'Arial' }}>
      <div className="container">
        
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" style={{ maxHeight: '60px',marginTop:'0px', marginRight:'100px' }} />
        </Link>
       
        {/* Burger Icon for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse  ${isOpen ? 'show' : ''}`} id="navbarNav">
       
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link"  style={{ color: 'black', fontWeight:600,marginRight:'20px' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"  style={{ color: 'black', fontWeight:600,marginRight:'20px' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link"  style={{ color: 'black', fontWeight:600,marginRight:'20px' }}>
                Contact
              </Link>
            </li>
            <li className="nav-item mx-auto text-center">
              <Link to="/cart" className="nav-link" style={{ color: 'black', fontWeight: 600,marginRight:'30px'}}>
                Cart | {cartItemCount > 0 && <span className="badge bg-success ms-1 small align-middle">{cartItemCount}</span>}
                {' Items'} <FontAwesomeIcon icon={faCartShopping} style={{ color: '#f39c12', fontSize:'20px'}} className='align-middle' />
              </Link>
            </li>
          </ul>
         
          <ul className="navbar-nav">
            <li className="nav-item mx-auto text-center">
              <Link to="/login" className="nav-link"  style={{ color: 'black', fontWeight:600, marginRight:'5px'}}>
                Login  <FontAwesomeIcon icon={faUser} style={{ color: '#00a8ff'}} />
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <form className="d-flex ">
                <input className="form-control form-control border-info" type="search" placeholder="Search for Products ..." aria-label="Search" style={{ marginRight: '5px' }} />
                <button className="btn btn-outline-info" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
