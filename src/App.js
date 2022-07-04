import './App.css';

import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Products from './components/Products';


function App() {

  const url = "http://localhost:8080/products/";
  const [products, setProducts] = useState([]);

  

  const getProducts = async () => {
    const productList = await fetchProducts();
    setProducts(productList);
  };

  const getProduct = async (id) => {
    const product = await fetchProductById(id);
    console.log(product);
  };


  useEffect(() => {
  }, []);

  const fetchProducts = async () => {
    const result = await fetch(url);
    const data = await result.json();

    return data;
  };

  const fetchProductById = async (id) => {
    const res = fetch(`{url}/{id}`);
    const data = await res.json();
    return data;
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <ul>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signin"} className="nav-link">
                SignIn
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign up
              </Link>
            </li>
            </ul>
          </div>
          
        </nav>

        <div className='clear'></div>

        <div className="container">
          
            <Routes>
              <Route path="/home" element={<Products products={products}/>} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
