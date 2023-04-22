import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer' >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className="mb-3 mb-md-0 text-white Footer-text">© 2023 Gomato, Inc</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
