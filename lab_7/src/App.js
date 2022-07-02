
import './App.css';
import React, { useEffect, useState } from 'react';
import LoginForm from './components/login'
import Signup from './components/signup';
import HomePage from './components/homePage'
import Product from './components/product';
import Login from './components/login';
import axios from 'axios';
import Users from './components/Users'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  const initialState = {
    users: [
      { firstName: "Lwam", lastName: "Tsegay", email: "sdf@gmail.com" },
      { firstName: "Robeil", lastName: "Aregawi", email: "asd@gmail.com" }
    ]
  }
  const fetchUser = async () => {
    let response = await axios.get('http://localhost:8081/users');
    console.log(response.data);
    setUserState({ users:response.data })
  }

  useEffect(() => {
    fetchUser();
  },[])

  let [userState, setUserState] = useState({ initialState });


  return (
    <div className="container-fluid">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
     </div>
  )

}

export default App;
