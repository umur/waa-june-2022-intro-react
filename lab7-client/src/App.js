import React from 'react';
import './App.css';

import SignIn from './components/Login';
import SignUp from './components/SignUp';
import BasicTable from './components/ProductList';


function App() {
  return (
    <div className="App">
      <div>
        <SignIn />
        <SignUp />
        <BasicTable />
      </div>
    </div >
  );
}

export default App;
