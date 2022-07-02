import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Products(props) {
    const [rowData, setRowData] = useState([
        {no:1, make: "Toyota", model: "Celica", price: 35000, year:2012, color:"yellow"},
        {no:2, make: "Ford", model: "Mondeo", price: 32000, year:2012, color:"yellow"},
        {no:3, make: "Porsche", model: "Boxster", price: 72000, year:2012, color:"yellow"}
    ]);

    const [columnDefs, setColumnDefs] = useState([
        { field: 'no' },
        { field: 'make' },
        { field: 'model' },
        { field: 'color' },
        { field: 'price' },
        { field: 'year' }
    ]);

    let [authMode, setAuthMode] = useState("list");

    const changeProductMode = () => {
        setAuthMode(authMode == "create" ? "list" : "create");
    }
    if (authMode == "create") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Create Product</h3>
                        <div className="form-group mt-3">
                            <label>Make</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Make"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Model</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Model"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Color</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Color"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Price</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Price"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Year</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Year"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary create" onClick={changeProductMode}>
                    <b>Create</b>
                </button>
            </div>
            <div className="ag-theme-alpine" style={{height: 400, marginTop: 50}}>
                <AgGridReact
                    rowData={rowData ? rowData : "Do record to display"}
                    columnDefs={columnDefs}>
                </AgGridReact>
            </div>
        </div>
    )
}

export default Products;