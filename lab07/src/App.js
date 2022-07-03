import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './Component/Header';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './containers/PageRoutes';
import Navbar from './Component/Navbar';


function App() {
  return (
    <BrowserRouter>
      {/* <Dashboard /> */}
      <Navbar />      
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
