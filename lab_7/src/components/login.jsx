import React, { useState } from 'react'

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
  const saveValue = () => {
    console.log(user)
  }
  
  return (
    <form>
      <div className='container'>
        <h1>LoginPage</h1>
        <div className='login-group'>
          <label>UserName:</label>
          <input
            defaultValue={user.userName}
            onChange={changeFields}
            type="text" name='userName' id='login'></input>
        </div><br />
        <div className='login-group'>
          <label>Password:</label>
          <input type="password" 
          defaultValue={user.password}
           onChange={changeFields}
           name='password' id='pass'></input>
        </div>
        <br />
        <input type='button'
          onClick={saveValue}
          value='Login'>
        </input>
        <a href=""><br /> SIGNUP </a>if you don't have account
      </div>

    </form>
  )
}

export default Login;