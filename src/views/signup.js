import React , { useState } from "react";
function SignUp(){
  const [state,setState] = useState({
    email:"",
    password:"",
    confirmPassword: ""
  })
  
  const {email,password, confirmPassword} = state;
  
  const changeHandler = e => {
    setState({...state,[e.target.name]:[e.target.value]});
  }
  
  const signUpHandler = e => {
    e.preventDefault();
    alert(state);
  }

  return (
    <div className="SignUp">
      <h1>Sign Up Now</h1>
      <form className="form">
        <div className="input-group">
          <label for="email">Email:</label>
          <input type="email" name="email" value={email} onBlur={changeHandler} />
        </div>
        <div className="input-group">
          <label for="password">Password:</label>
          <input type="password" value={password}  onBlur={changeHandler} name="password" />
        </div>
        <div className="input-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" value={confirmPassword}  onBlur={changeHandler} name="confirmPassword" />
        </div>
        <button className="primary" onClick={signUpHandler}>Sign up</button>
      </form>
    </div>
  );
  
}

export default SignUp;