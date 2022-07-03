import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
        {/* <Route path="/" element={<Product />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
