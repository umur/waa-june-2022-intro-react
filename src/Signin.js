import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Signup from "./Signup";

function Signin(props) {
    // let history = useHistory();
    // const changeAuthMode = () => {
    //     // history.push("/signup");
    // }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        {/* onClick={changeAuthMode} */}
                        <a href="/signup">
                            <span className="link-primary">
                                Sign Up
                            </span>
                        </a>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            required
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <a href="/products" style={{textAlign:"center"}}>
                            <span className="btn btn-primary">
                                Submit
                            </span>
                        </a>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Signin;