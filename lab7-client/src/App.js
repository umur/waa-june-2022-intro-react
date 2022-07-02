import logo from './logo.svg';
import './App.css';
import React from 'react';

import Product
 from './component/Product';
function App() {

  const productArray = [
    {name: "apple", price: 200},
    {name: "banana" , price:400},
    {name: "cake", price: 300}
  ]
  return (
    <div>
      {
      <Product dataArray={productArray}/>
      /* <ul>
      {
        productArray.map((item)=>{
          return (
            <Product name={item.name} price={item.price}/>
          )
        })
      }
      </ul> */}
    </div>
  );
}

export default App;
