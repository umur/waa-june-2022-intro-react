import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } = useFetch('http://localhost:8000/products/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/products/' + product.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="product-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { product && (
        <article>
          <h2>{ product.title }</h2>
          <p>Written by { product.author }</p>
          <div>{ product.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default ProductDetails;