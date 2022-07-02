import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Component/Login";
import Signup from "../Component/Signup";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      



    </Routes>
  )
}

export default PageRoutes;