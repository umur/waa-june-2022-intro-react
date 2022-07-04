import { useState } from "react";

const Login = (props) => {

  const [state, setState] = useState({
    username: "",
    password: "",
    message: "",
  });

  const handleLogin =  (event) => {
      event.preventDefault();
    if(state.username==='shree@gmail.com' && state.password==='shree'){
        setState({...state,message:'Login Success'})
    } else {
        setState({...state,message:'Login failed'})
    }
  }

  return (
    <div className="row mt-2">
      <div className="col-lg-6 mx-auto">
        <h3 className="my-2"> Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(event) => {
                setState({ ...state, username: event.target.value });
              }}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(event) => {
                setState({ ...state, password: event.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            onClick={(event) => handleLogin(event)}
            className="btn btn-primary"
          >
            Submit
          </button> {state.message}
        </form>
      </div>
    </div>
  );

  
};

export default Login;