import React from "react";

function SignIn() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label> UserName: </label>
                <input type="text"></input>
                <br></br>
                <label>Password: </label>
                <input type="password"></input>
                <br></br>
                <input type="submit"></input>
            </form>

        </div>


    );
}
export default SignIn;