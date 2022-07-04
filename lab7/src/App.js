
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './Signup';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;