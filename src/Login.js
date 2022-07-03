import { useState } from "react";

const Login = (props) => {

  const [state, setState] = useState({
    username: "",
    password: "",
    message: "",
  });

  const handleLogin =  (event) => {
      event.preventDefault();
    if(state.username==='1234' && state.password==='1234'){
        setState({...state,message:'Login Success'})
    } else {
        setState({...state,message:'Login failed'})
    }
  }

  return (
    <div className="signin">
      <div>
        <h3> Login</h3>
        <form>
          <div>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
    
              id="email"
              onChange={(event) => {
                setState({ ...state, username: event.target.value });
              }}
            
            />
            
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(event) => {
                setState({ ...state, password: event.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            onClick={(event) => handleLogin(event)}

          >
            Submit
          </button> {state.message}
          <a href="/register">Sign Up</a>
        </form>
      </div>
    </div>
  );

  
};

export default Login;