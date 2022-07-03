import React from "react";

function Login(props) {
    return(
        <div className="form">
        <h1>Login form</h1>
            <input type="text" id="userName" name="userName" placeholder="login" /> <br /><br />
            <input type="password" id="password" name="password" placeholder="password" /><br /><br />
            <input type="submit" value="login" />
        </div>
    );
}

export default Login;