import './App.css';
import LoginPage from './component/login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/main.css'

function App() {
  return (

    <div className="body text-center App">
      <main className="form-signin">
       <LoginPage></LoginPage>
      </main>
      </div> 
  );
}

export default App;
