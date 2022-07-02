import React,{useState} from 'react'

const Product = () => {
    const [product,setProduct] = useState([])
  return (
    <div className='pro-ctn'>
        <h1 className='text'>List of Product</h1>
        <table className='prodcutList'>
   <thead>
    <th>Product Id</th>
    <th>Product Name</th>
    <th>Product barcode</th>
   </thead>

        </table>

    </div>

  )
}

export default Product