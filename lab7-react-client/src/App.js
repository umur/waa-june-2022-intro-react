
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
      {/* <Login/>
      <Register/>
      <CreateProduct/> */}
      {
        // state.map(item=>{
        //   return(
        //       <ListProduct name={item.name} price={item.price}/>
        //   );
        // })
        // <ListProduct items ={state}/>
      }
     
    </div>
  );
}

export default App;
