
import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/login'
import Signup from './components/signup';
import User from './components/User';

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
      <div className="signup">
        <Signup />
      </div>
      {(user.email = "") ? (
        <div className='welcome'>
          <h2>Wel Come,<span>{user.name}</span></h2>
          <button>Logout</button>
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
