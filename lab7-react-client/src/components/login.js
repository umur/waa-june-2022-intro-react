import React from "react";
import '../css/login.css';
function Login (props) { 
    return(
        <div className="form">
            
            <div className="auth-form-container">          
            <form className="auth-form">
                <div className="auth-form-content">
                <h3 className="auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                    <label>Username</label>
                    <input type="text" className="form-control mt-1" placeholder="Enter username"></input>
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input type="password" className="form-control mt-1" placeholder="Enter password"></input>
                </div>
                <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
                </div>
            </form>
            </div>
        </div>
    );
 }

 export default Login;