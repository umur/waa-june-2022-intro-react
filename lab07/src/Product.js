import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const handleItemClick = (itemId) => {
    navigate("/product-detail/" + itemId);
  }

  const navigate = useNavigate();
  return (
    <div onClick={() => handleItemClick(props.id)}>
      <h3>{props.name}</h3>
      <div>
        {props.price}
      </div>
      <input
        type="button"
        value="Delete"
        onClick={props.deleteProduct} />
    </div>
  )
}

export default Product;