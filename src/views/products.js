import ProductDetails from './productdetails';

const Products = ({products}) => {
    return (
        <div>
            {
                products.map((product, i) => (
                    <ProductDetails key={i} product={product} />
                ))
            }
        </div>
    )
}

export default Products;