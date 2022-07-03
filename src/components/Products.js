import ProductDetails from "./ProductDetails";

const Products = ({products}) => {
    return (
        <div>
            {
                products.map((prod, i) => (
                    <ProductDetails key={i} prod={prod} />
                ))
            }
        </div>
    )
}

export default Products;