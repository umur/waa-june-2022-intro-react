import './App.css';
import LoginPage from './component/login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/main.css'
import { useEffect, useState } from 'react';
import SignUp from './component/signUp';
import ListProducts from './component/Product/ListProducts';
import axios from 'axios'


function App() {
  let [showSignUp, setSignUp] = useState(false);
  let [showProduct, setProduct] = useState(false);

  const setValues = (e) => {
    switch (e.target.name) {
      case 'productList':
        setSignUp(false);
        setProduct(true);
        break;
      default:
        setSignUp(!showSignUp);
        break;

    }
  }

  const fetchPersons = async () => {
    let response = axios.get('https://www.google.com/');
    console.log(response);
  }

  useEffect(() => {
      fetchPersons();
  },[])

  return (
    <div className='App'>
      <div className="body">
        <main className="form-signin">
          {!showProduct && <>
            <a href='#' name="productList" onClick={setValues}>List Products</a>
            {!showSignUp && <>
              <LoginPage></LoginPage>
              <button className="btn btn-sm btn-success" type="submit" onClick={setValues}>Sign Up</button>
            </>
            }

            {showSignUp && <>
              <SignUp></SignUp>
              <button className="btn btn-sm btn-success" type="submit" onClick={setValues}>Sign In</button>
            </>}
          </>
          }


        </main>
      </div>
      {showProduct && <>
        <h1 className="h3 mb-3 fw-normal">Product List</h1>
        <ListProducts></ListProducts>
      </>}
    </div>
  );
}

export default App;
