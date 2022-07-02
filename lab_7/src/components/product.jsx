import React, { useState } from "react";

const Product = () => {
  const initialState = { productId: "", productName: "", productQuantity: "" };
  const [product, setProduct] = useState(initialState);

  const onchangeFields = () => {
    const copyState = { ...product };
    copyState[product.target.name] = product.target.value;
    setProduct(copyState);
  };
  const saveValue = () => {
    console.log(product);
  };

  return (
    
    <div className="table-group">
      <h1 className="product">List of Product</h1>
      <table className="prodcutList">
        <thead>
          <th>Product Id :{product.productId} </th>
          <th>Product Name: {product.productName} </th>
          <th>Product Quantity:{product.productQuantity}</th>
        </thead>
      </table>
    </div>
  );
};

export default Product;
