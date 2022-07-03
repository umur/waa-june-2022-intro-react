import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-preview" key={product.id} >
          <Link to={`/products/${product.id}`}>
            <h2>{ product.title }</h2>
            <p>Category  { product.category }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ProductList;