
import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/login'
import Signup from './components/signup';
<<<<<<< HEAD
import HomePage from './components/homePage'
import Product from './components/product';
=======
import User from './components/User';
>>>>>>> ce478c77b9612fa6f96b9833b1151b42218e177f

function App() {
  const admin = {
    email: 'lulu@gmail.com',
    pass: 'adm123'
  }
  const ourUsers = [
    { firstName: 'Robeil' },
    { firstName: 'Luwam' },
    { firstName: 'Merhawi' },
    { firstName: 'Keleab' }
  ];
  const [user, setUser] = useState({ userName: "", password: "" })
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }
  const Logout = () => {
    console.log("logout");
  }

  return (
    <div className="App">
<<<<<<< HEAD
    <div className='product'>
       <Product/>    
    </div>
     {(user.email ="") ? (
      <div className='welcome'>
        <h2>Wel Come,<span>{user.name}</span></h2>
        <button>Logout</button>
=======
      <div className="signup">
        <Signup />
      </div>
      {(user.email = "") ? (
        <div className='welcome'>
          <h2>Wel Come,<span>{user.name}</span></h2>
          <button>Logout</button>
>>>>>>> ce478c77b9612fa6f96b9833b1151b42218e177f
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    <div>

    </div>
    </div>


  );

}

export default App;
