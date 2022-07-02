
import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/login'
import Signup from './components/signup';
import HomePage from './components/homePage'
import Product from './components/product';
import { MyUser, Welcome } from './components/User';
import Login from './components/login';

function App() {
  return (
    <>
      <Login/>
      <Signup/>
    </>
  )

}

export default App;
