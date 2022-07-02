import React, { useState } from 'react'

 function Login({ Login, error }) {
  
  const [details, setDetails] = useState({ name: "", password: "" })

  // const submitHandler = s => {
  //   s.preventDefault();
  // }
  return (
    <form>
      <div className='ctn'>
        <h1>LoginPage</h1>
        {/*ERROR!*/}
        <div className='login-group'>
          <label>UserName:</label>
          <input type="text" name='login' id='login'></input>
        </div>
        <div className='login-group'>
          <label>Password:</label>
          <input type="password" name='pass' id='pass'></input>
        </div>
        <input type='button' value='Login'></input>
        {/* <div className='login-group'>
        <label>UserName:</label>
        <input type="text" name='login' id='login'></input>
</div> */}
      </div>

    </form>
    // <>
    // <div>Login</div>
    // <input type="text" name='login'></input>
    // <input type="password" name='pass'></input>
    // </>
  )
}

export default Login;