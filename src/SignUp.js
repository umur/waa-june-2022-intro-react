import { useState } from "react";

const Signup = (props) => {

    const [state, setState] = useState({firstName:"",middleName:"",lastName:"", email:"",password:""})

    const handleSignup = (event) => {
        event.preventDefault();
    }

    return(
        <div className="sign">
        <div className="sign-1">
          <h3> Registration</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                onChange={(event) => {
                  setState({ ...state, firstName: event.target.value });
                }}
                
              />
              <div id="email">
                
              </div>
            </div>
            <div>
              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                type="text"
                
                onChange={(event) => {
                  setState({ ...state, middleName: event.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="lastName"
                
                id="lastName"
                onChange={(event) => {
                  setState({ ...state, lastName: event.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(event) => {
                  setState({ ...state, email: event.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={(event) => {
                  setState({ ...state, password: event.target.value });
                }}
              />
            </div>
            <button
              type="submit"
              onClick={(event) => handleSignup(event)}
              
            >
              Register
            </button> {state.message}
            <a href="/">Login</a>
          </form>
        </div>
      </div>
    )    
}

export default Signup;