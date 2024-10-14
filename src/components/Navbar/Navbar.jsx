import React from 'react'

import logo from "../../assets/brand_logo.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="brand_logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Price</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
        </ul>
        <button type="button">
          <a href="#">Contact Us</a>
        </button>
      </div>
    </div>
  </nav>

  )
}

export default Navbar