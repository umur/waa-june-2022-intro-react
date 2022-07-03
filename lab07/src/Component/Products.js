import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [productsState, setProductsState] = useState(
    [
      { id: 1, name: "Apple", price: 100 },
      { id: 2, name: "Banana", price: 200 }
    ]
  );

  const handleCreateProductClick = () => {
    navigate('/add-product');
  }

  
  return (
    <div>
      <div>
        <input type="button" value="Create new Product" onClick={handleCreateProductClick}></input>
      </div>

      {productsState.map(product => {
        return (
          <Product id={product.id}
            key={product.id}
            name={product.name}
            price={product.price}  />
        )
      })}

    </div>
  );

}

export default Products;