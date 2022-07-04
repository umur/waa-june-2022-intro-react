import { useState } from "react";

const Signup = (props) => {

    const [state, setState] = useState({firstName:"",middleName:"",lastName:"", email:"",password:""})

    const handleSignup = (event) => {
        event.preventDefault();
    }

    return(
        <div className="row mt-2">
        <div className="col-lg-6 mx-auto">
          <h3 className="my-2"> Registration</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                onChange={(event) => {
                  setState({ ...state, firstName: event.target.value });
                }}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                type="text"
                className="form-control"
                id="middleName"
                onChange={(event) => {
                  setState({ ...state, middleName: event.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="lastName"
                className="form-control"
                id="lastName"
                onChange={(event) => {
                  setState({ ...state, lastName: event.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(event) => {
                  setState({ ...state, email: event.target.value });
                }}
              />
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
              onClick={(event) => handleSignup(event)}
              className="btn btn-primary"
            >
              Register
            </button> {state.message}
          </form>
        </div>
      </div>
    )

    
}

export default Signup;