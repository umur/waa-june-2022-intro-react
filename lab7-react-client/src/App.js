
import './App.css';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/register';
import CreateProduct from './components/create-product';
import {useState} from 'react';
import ListProduct from './components/list-product';

function App() {
  let products = [{name:"Apple",price:"1000"},{name:"Samsung",price:"700"},{name:"PC",price:"300"},{name:"tablet",price:"200"}];
  const [state, setstate] = useState(products);
  return (
    <div className="App">
      <Login/>
      <Register/>
      <CreateProduct/>
      {
        // state.map(item=>{
        //   return(
        //       <ListProduct name={item.name} price={item.price}/>
        //   );
        // })
        <ListProduct items ={state}/>
      }
     
    </div>
  );
}

export default App;
