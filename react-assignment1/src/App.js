import './App.css';
import LoginPage from './component/login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/main.css'
import { useState } from 'react';
import SignUp from './component/signUp';

function App() {
  let [showSignUp, setSignUp] = useState(false);

  const setValues = (e) =>{
    setSignUp(!showSignUp);
  }

  return (
    <div className="body text-center App">
      <main className="form-signin">
        {!showSignUp && <>
          <LoginPage></LoginPage>
          <button className="btn btn-sm btn-success" type="submit" onClick={setValues}>Sign Up</button>
        </>
        }

        {showSignUp && <>
          <SignUp></SignUp>
          <button className="btn btn-sm btn-success" type="submit" onClick={setValues}>Sign In</button>
        </>}
      </main>
    </div>
  );
}

export default App;
