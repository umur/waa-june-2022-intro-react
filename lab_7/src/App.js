
import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/login'
import Signup from './components/signup';
import HomePage from './components/homePage'
import Product from './components/product';
import Login from './components/login';

function App() {
  return (
    <>
      <Login/>
      <Signup/>
      <Product/>
    </>
  )

}

export default App;
