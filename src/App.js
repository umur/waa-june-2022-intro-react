import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './SignUp';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">     
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/" exact element={<Login />}></Route>           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
