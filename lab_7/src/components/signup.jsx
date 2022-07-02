import {React, useState} from 'react';

function Signup(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    //fetch

    return (
        <div className="loginForm">
            <div className="welcome">
                <h2>Welcome to MIU WAA course </h2>
                <form>
                    <label>Username :
                        <input type="text" 
                        /><br></br>
                    </label>
                    <label>Password :
                        <input type="text" />
                    </label><br></br>
                    <button onClick={props.onClick}>Signup
                    {props.value}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;