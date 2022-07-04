import React, { useState } from "react";
import './App.css';

function Register() {
  const initialSate = {
    email: "test",
    firstname: "test",
    lastname: "test",
    password: "test"
  };
  const [saveRegisterState, setRegisterState] = useState(initialSate);
  const fieldChanged = (event) => {
    const copyState = { ...saveRegisterState };
    copyState[event.target.name] = event.target.value;
    setRegisterState(copyState);
  };

  const onClicked = () => {
    alert(JSON.stringify(saveRegisterState))
    console.log(JSON.stringify(saveRegisterState));
  };
  return (
    <body>
      <h1>Register </h1>
      <table class="center">
        <tr>
          <td>Email:</td>
          <td>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={saveRegisterState.email}
              onChange={(event) => {
                fieldChanged(event);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Firstname:</td>
          <td>
            <input
              type="text"
              id="firstname"
              name="firstname"
              defaultValue={saveRegisterState.firstname}
              onChange={(event) => {
                fieldChanged(event);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Lastname:</td>
          <td>
            <input
              type="text"
              id="lastname"
              name="lastname"
              defaultValue={saveRegisterState.lastname}
              onChange={(event) => {
                fieldChanged(event);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Password:</td>
          <td>
            <input
              type="text"
              id="password"
              name="password"
              defaultValue={saveRegisterState.password}
              onChange={(event) => {
                fieldChanged(event);
              }}
            />
          </td>
        </tr>
      </table>
      <br />
      <div>
      <input type="button" value="Register" onClick={onClicked} />
      </div>
    </body>
  );
}

export default Register;
