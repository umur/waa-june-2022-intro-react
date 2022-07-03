import React, { useState } from "react";

const fields = {
    productName: '',
    price: '',
    category: ''
}

function AddProduct() {
    const [getFieldValue, setFieldValue] = useState(fields);

    const setValues = (e) => {
        const copyState = { ...getFieldValue };
        copyState[e.target.name] = e.target.value;
        setFieldValue(copyState);
    }

    return (
        <>
            <form>
                <h1 className="h3 mb-3 fw-normal">SIGN UP</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        defaultValue={getFieldValue.productName}
                        name="productName" onChange={setValues} />
                    <label htmlFor="floatingInput">Product Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="" defaultValue={getFieldValue.price}
                        name="password" onChange={setValues} />
                    <label htmlFor="floatingPassword">Price</label>
                </div>
                <div className="form-floating">
                    <select className="form-select" aria-label="Default select example" name="category">
                        <option>--Select--</option>
                        <option>Milk</option>
                        <option>Fruits</option>
                    </select>
                </div>
                <div className="mt-5">
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; Ashish Pokhrel</p>
            </form>
        </>
    )
}

export default AddProduct;