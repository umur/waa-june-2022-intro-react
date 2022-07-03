import React, { useState } from 'react'
import Product from './product'

function Login() {

  const initialState = { userName: "Test", password: "really" }
  const [user, setUser] = useState(initialState)

  //capturing the date from the input
  const changeFields = (event) => {
    const copyState = { ...user }
    copyState[event.target.name] = event.target.value;
    setUser(copyState);
  }
  //save button function
  const login = () => {
    console.log(user)
    // if(user.userName === "Test" && user.password === "really"){

    // }
  }

  return (

    <div className='container-fluid content'>
      <h1>LoginPage</h1>
      <div className='border alert alert-success container'>
        <form className="minForm">
          <div className="column">
            <label>UserName:</label>
            <input className="form-control"
              defaultValue={user.userName}
              onChange={changeFields}
              type="text" name='userName' id='login'>
            </input>
          </div>
          <br />
          <div className='column'>
            <label>Password:</label>
            <input type="password" className="form-control"
              defaultValue={user.password}
              onChange={changeFields}
              name='password' id='pass'>
            </input>
          </div>
          <br />
          <a href="http://localhost:3000/signup" /> <input type='button' className='btn btn-primary'
            onClick={login}
            value='Login'>
          </input>
          {/* <a href="http://localhost:3000/product"></a><button>Login1</button></a> */}
          <a href="http://localhost:3000/signup"><br /> SIGNUP </a>if you don't have account
        </form>
      </div>
    </div>
  )
}

export default Login;