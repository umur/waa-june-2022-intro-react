import React, { useState, useEffect } from 'react'
import axios from 'axios'
import userDetails from './UserDetails';
import { useNavigate } from 'react-router';



function Login() {

  let [userState, setUserState] = useState({});

  const fetchUser = async () => {
    let response = await axios.get('http://localhost:8081/users');
    console.log(response.data);
    setUserState(response.data)
  }

  useEffect(() => {
    fetchUser();
  }, [])

  const redirect = useNavigate();

  //save button function
  const login = () => {

    console.log("username " +userState.userName);
    console.log("password" + userState.password)
    
    if (userState.userName === "test" && userState.password === "test") {
      redirect('./UserDetails.js')
    }
  }

  const changeField = (event) => {
    const copyState = { ...useState };
    copyState[event.target.name] = event.target.value;
    setUserState(copyState);
  }

  return (

    <div className='container-fluid content'>
      <h1>Login Page</h1>
      <div className='border alert alert-success container'>
        <form className="minForm">
          <div className="column">
            <label>UserName:</label>
            <input className="form-control"
              defaultValue={userState.userName}
              onChange={changeField}
              type="text" name='userName' id='login'>
            </input>
          </div>
          <br />
          <div className='column'>
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              defaultValue={userState.password}
              onChange={changeField}
              name='password' id='pass'>
            </input>
          </div>
          <br />
          <button type='button' className='btn btn-primary'
            onClick={login}
            value='Login'>Login</button><br />
          <a href="http://localhost:3000/signup">SignUp If you have an Account</a>
          {/* <Link to="/signup">SIGNUP If you don't have account</Link> */}
          {/* <Routes>
            <Route path='/login'
              element={<Login></Login>}>
            </Route>
          </Routes> */}
        </form>
      </div>
    </div>
  )
}

export default Login;