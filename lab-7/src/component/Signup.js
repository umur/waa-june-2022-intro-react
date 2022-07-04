import React from "react";

function Signup(props){
    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <a href="/signin">
                            <span className="link-primary">
                                Sign In
                            </span>
                        </a>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            required
                            className="form-control mt-1"
                            placeholder="please input your full name"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            required
                            className="form-control mt-1"
                            placeholder="please input your email address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="please input your password"
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

export default Signup;