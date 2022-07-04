import React , { useState } from "react";
function SignUp(){
  const [data,setData] = useState({
    email:"",
    password:"",
    confirmPassword: ""
  })
  
  const {email,password, confirmPassword} = data;
  
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="SignUp">
      <h1>Sign Up</h1><br></br>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email}  onChange={changeHandler} placeholder="alisher@email.com" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password}  onChange={changeHandler} name="password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm assword</label>
          <input type="password" value={confirmPassword}  onChange={changeHandler} name="confirmPassword" />
        </div>
        <button className="primary">Sign up</button>
      </form>
    </div>
  );
  
}

export default SignUp;