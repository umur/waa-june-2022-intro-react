import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  
  const navigate = useNavigate();
  return (
    <div>
      <h3>{props.name}</h3>
      <div>
        {props.price}
      </div>      
    </div>
  )
}

export default Product;