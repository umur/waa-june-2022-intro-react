import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes,Route } from "react-router";
import { Link } from "react-router-dom";
import Login from './login';
import Register from './register';
import CreateProduct from './create-product';
import ListProduct from './list-product';
import {useState} from 'react';
import '../css/header.css';

function Header(props) {
    let products = [{name:"Apple",price:"1000"},{name:"Samsung",price:"700"},{name:"PC",price:"300"},{name:"tablet",price:"200"}];
    const [state, setState] = useState(products);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/*">Navbar</Navbar.Brand>
          <Nav className="me-auto navBar">
            <Link to="/create-product">Create Product</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
       
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/create-product" element={<CreateProduct/>}></Route>
        <Route exact path="/products" element={<ListProduct  items ={state}/>}></Route>
        {/* <Route exact path="/*" element={<Header/>}></Route> */}
      </Routes>
    </>
  );
}

export default Header;
