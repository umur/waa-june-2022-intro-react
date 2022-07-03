import axios from "axios";
import React from "react"
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProductRequest = {
      productName: e.target.name.value,
      price: e.target.price.value
    }

    await axios.post('http://localhost:8080/api/v1/products', newProductRequest)
      .then(resonse => {
        console.log('product added successfully');
        console.log(resonse.data);
        navigate('/products');
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleAddProduct}>
      Name: <input type='text' name='name' />
      Price: <input type='text' name='price' />
      <input type='submit' value='save' />
    </form>


  )
}

export default NewProduct;