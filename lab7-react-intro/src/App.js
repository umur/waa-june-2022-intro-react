import logo from './logo.svg';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import AddProduct from './component/AddProduct';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AddProduct />
    </div>
  );
}

export default App;
