const ProductDetails = ({product}) => {
    return (
        <div>
            <p><b>Name:</b> {product.name}</p>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Price:</b> {product.price}</p>
        </div>
    );
}

export default ProductDetails;