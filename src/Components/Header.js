import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge'
import { Link,useNavigate } from "react-router-dom";
import {  useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";

const Header = () => {
  const [cartView,setCardView] = useState(false)
  let data = useCart();
const navigate = useNavigate();
const handleLogout = ()=>{

  localStorage.removeItem('authToken');
  navigate('/login')
}

  return (
    <div>
      {/* TO SELECT IN BULK PRESS CTRL + SHIFT + L */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2" to="/">
            Gomato
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {/* {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5 active"
                    aria-current="page"
                    to="/"
                  >
                    Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul> */}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-danger mx-1 " to="/login">
                  Login
                </Link>
                <Link
                  className="btn bg-white text-danger mx-1 active"
                  to="/signup"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
              <div className="btn bg-white text-danger mx-2" onClick={()=>{setCardView(true)}}>
                Cart {" "}
                <Badge pill bg='danger'>{data.length}</Badge>
              </div> 
              {cartView?<Modal onClose = {()=> setCardView(false)}><Cart/></Modal> : null}
              <div className="btn bg-white text-danger mx-2 " onClick={handleLogout}>
                Logout
              </div>
              </div>
            )}


            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
