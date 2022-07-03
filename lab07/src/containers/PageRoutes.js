import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import Home from "../Component/Home";
import Products from "../Component/Products";
import LoginPage from "../Component/LoginPage";


const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/products' element={<Products />} />      
    </Routes>
  )
}

export default PageRoutes;