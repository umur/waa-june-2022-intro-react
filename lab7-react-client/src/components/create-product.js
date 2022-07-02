import React from "react";
import '../css/login.css';

function CreateProduct(props){
    return(
        <div className="form">
            
        <div className="auth-form-container">          
        <form className="auth-form">
            <div className="auth-form-content">
            <h3 className="auth-form-title">Create Product</h3>
            <div className="form-group mt-3">
                <label>Product Name</label>
                <input type="text" className="form-control mt-1" placeholder="Enter product name"></input>
            </div>
            <div className="form-group mt-3">
                <label>Product Price</label>
                <input type="text" className="form-control mt-1" placeholder="Enter Price"></input>
            </div>
            
            <div className="d-grid gap-2 mt-3">
        <button type="Create Product" className="btn btn-primary">
          Create Product
        </button>
      </div>
     
            </div>
        </form>
        </div>
    </div>
    
    );
}

export default CreateProduct;