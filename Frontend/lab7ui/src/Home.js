import ProductList from "./ProductList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: products,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default Home;
