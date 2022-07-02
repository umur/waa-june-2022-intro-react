import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './Component/Header';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './containers/PageRoutes';


function App() {
  return (
    <BrowserRouter>
      {/* <Dashboard /> */}
      <Header />
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
