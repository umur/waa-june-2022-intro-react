import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function Login() {
  const initialSate = {
    email: "",
    password: "",
  };
  const [saveLoginState, setLoginState] = useState(initialSate);
  const fieldChanged = (event) => {
    const copyState = { ...saveLoginState };
    copyState[event.target.name] = event.target.value;
    setLoginState(copyState);
  };

  const onClicked = () => {
    alert(JSON.stringify(saveLoginState));
    console.log(JSON.stringify(saveLoginState));
  };
  return (
    <body>
      <h1>Lab 5 - Spring Security (Fetch Version) </h1>
      <br></br>
      <br></br>
      Email:
      <input
        type="text"
        id="email"
        name="email"
        defaultValue={saveLoginState.email}
        onChange={(event) => {
          fieldChanged(event);
        }}
      />
      Password:
      <input
        type="text"
        id="password"
        name="password"
        defaultValue={saveLoginState.password}
        onChange={(event) => {
          fieldChanged(event);
        }}
      />
      <input type="button" value="Login" onClick={onClicked} />
    </body>
  );
}

export default Login;
