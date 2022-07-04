import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Login from './Login';
import Register from './Register';
import Product from './Product';
function App() {
  const initialSata ={
    users:[
      {email:'uinan@miu.edu',password:`123`},
      {email:'john@miu.edu',password:`123`}
    ]
  }
  let result = useState(initialSata);
  // const personState = result[0];
  // const setPersonState = result[1];
  let[personState,setPersonState]=useState(initialSata);
  // return (
  //   <Person />    
  // )
  return(
    <div className='App'>  
    <Login/> 
    <Register/>
    <Product/>
     
    </div>
  )
  //return React.createElement('div',{id:'test'},React.createElement('div',null,'data5'),React.createElement('div',null,'data6'))

}

export default App;
