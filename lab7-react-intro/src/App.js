import logo from './logo.svg';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import AddProduct from './component/AddProduct';
import ListProduct from './component/ListProduct';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AddProduct />
      <Container>
      <ListProduct />
      </Container>
      
    </div>
  );
}

export default App;
