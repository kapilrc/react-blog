import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <div>
        {/* <!-- Navigation --> */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <Link className="navbar-brand" to="/">Start Bootstrap</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sample-post">Sample Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar; 