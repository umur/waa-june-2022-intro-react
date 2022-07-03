import React from 'react';

const Login = () => {
      
    return (
  
      <form>
        <h1>Login</h1>
        <div>
          <input type="text"
            id="userName"
            name="userName"
            placeholder="login"
          />
          <input type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <input type="submit" value="login"></input>
        </div>
  
      </form>
  
    );
  
  
  };
  
  export default Login;