import React, { useState } from "react";



const initialState = {
    'username': null,
    'password': null
}


function setValues(e) {
    debugger
    // setLoginState([e.target.name] = e.target.value )
}

function LoginPage() {
    let [getLoginState, setLoginState] = useState(initialState);
    return (
        <div>
            <h1>SIGN IN</h1>
            <form>
                <label>
                    User Name:
                    <input type="text" value={getLoginState.username} name="username" onChange={(setValues)} />
                </label>
                <p> This is the paragraph : {getLoginState.username}</p>
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default LoginPage;