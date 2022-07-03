import React, { useState } from "react";
import AddProduct from "./AddProduct";


function ListProducts() {
    const [getAddProduct, setAddProduct] = useState(false);

    const showHideProduct = (e) => {
        setAddProduct(!setAddProduct);
    }

    return (
        <>
            {!getAddProduct && <>
                <button className="btn btn-sm btn-success" type="submit" onClick={showHideProduct}>Add Product</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@protein</td>
                        </tr>
                    </tbody>
                </table>
            </>}
            {getAddProduct && <>
                <a href='#' className="float-right" name="productList" onClick={showHideProduct}>List Products</a>
                <AddProduct></AddProduct>
            </>}
        </>
    )
}

export default ListProducts;