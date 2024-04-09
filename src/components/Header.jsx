import { Link, NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import { ProductContext } from "../context/productContext";
import { BasketContext } from "../context/basketContext";
import FilterArea from "./FilterArea";

const Header = () => {

  const { setSelectedCategory } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);
  const {categories} = useContext(ProductContext)

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  return (

    <nav className="navbar navbar-dark bg-dark bg-black fixed-top navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex gap-3 align-items-center" to="/">
          <FaShopify className="text-warning fs-1" /> TrendBazaar </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">TrendBazaar</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end align-items-md-center flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/basket">Basket <span className="bedge bg-danger rounded-5 fw-bold p-1 ms-1">{totalAmount}</span></NavLink>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorys
                </button>

                <ul className="dropdown-menu dropdown-menu-dark">
                  <li >
                    <button onClick={() => setSelectedCategory('all')}
                      className="dropdown-item">All</button>
                  </li>

                  {categories?.map((category, i) => (
                    <li key={i}>
                      <button onClick={() => setSelectedCategory(category)}
                        className="dropdown-item">{category}</button>
                    </li>
                  ))}

                </ul>
              </li>
            </ul>

            <FilterArea/>
            
          </div>
        </div>
      </div>
    </nav>


  )
}

export default Header;