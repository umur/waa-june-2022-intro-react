
import './App.css';
import React, { useEffect, useState } from 'react';
import Signup from './components/signup';
import Product from './components/product';
import Login from './components/login';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NoPage from './components/NoPage';


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
        <Route path="/"element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
     </div>
  )

}

export default App;
