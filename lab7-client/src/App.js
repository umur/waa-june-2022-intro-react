import React from 'react';
import './App.css';

import SignIn from './components/Login';
import SignUp from './components/SignUp';
import BasicTable from './components/ProductList';
import AddProducts from './components/AddProducts';

import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <div>
        <SignIn />
        <SignUp />
        <Container component="main" maxWidth="xs">
        <BasicTable />
        </Container>
        <AddProducts />
      </div>
    </div >
  );
}

export default App;
