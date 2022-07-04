import React , { useState } from "react";
function SignIn(){
  const [state,setState] = useState({
    email:"",
    password:""
  })
  
  const {email,password} = state;
  
  const changeHandler = e => {
    setState({...state,[e.target.name]:[e.target.value]});
  }
  
  const signInHandler = e => {
    e.preventDefault();
    console.log(state);
  }
  return (
    <div className="SignIn">
      <h1>Sign in</h1>
      <form className="form">
        <div className="input-group">
          <label for="email">Email:</label>
          <input type="email" name="email" value={email} onBlur={changeHandler} />
        </div>
        <div className="input-group">
          <label for="password">Password:</label>
          <input type="password" value={password} onBlur={changeHandler} name="password"/>
        </div>
        <button className="primary" onClick={signInHandler}>Sign in</button>
      </form>
    </div>
  );
  
}

export default SignIn;