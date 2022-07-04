import React , { useState } from "react";
function SignIn(){
  const [data, setData] = useState({
    email:"",
    password:""
  })
  
  const {email,password} = data;
  
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div className="SignIn">
      <h1>Sign in</h1><br></br>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email}  onChange={changeHandler} placeholder="alisher@email.com" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password}  onChange={changeHandler} name="password" />
        </div>
        <button className="primary">Sign in</button>
      </form>
    </div>
  );
  
}

export default SignIn;