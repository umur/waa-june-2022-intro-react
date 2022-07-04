import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Products(props) {
    const [rowData, setRowData] = useState([
        { no: 122, make: "Toyota", model: "Celica", price: 35000, year: 2012, color: "yellow" },
        { no: 233, make: "Ford", model: "Mondeo", price: 32000, year: 2012, color: "yellow" },
        { no: 344, make: "Porsche", model: "Boxster", price: 72000, year: 2012, color: "yellow" }
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

    
    const [getSerialNumber, setSerialNumber] = useState({});
    const [getMake, setMake] = useState({});
    const [getModel, setModel] = useState({});
    const [getColor, setColor] = useState({});
    const [getPrice, setPrice] = useState({});
    const [getYear, setYear] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {    
                    no: getSerialNumber,
                    make: getMake, 
                    model: getModel, 
                    price: getPrice, 
                    year: getYear, 
                    color: getColor 
                };
        setRowData([...rowData, data]);
        setAuthMode("create");
    }
    localStorage.setItem("rowData", JSON.stringify(rowData));
    let local = localStorage.getItem("rowData");



    if (authMode == "create") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={e => { handleSubmit(e) }}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Create Product</h3>
                        <div className="form-group mt-3">
                            <label>Serial Number</label>
                            <input
                                type="number"
                                name='no'
                                required
                                value={rowData.no}
                                className="form-control mt-1"
                                placeholder="Enter Serial Number"
                                onChange={(e) => setSerialNumber(e.target.value)}
                            // onChange={(event) => {fieldChagned(event)}}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Make</label>
                            <input
                                type="text"
                                name='make'
                                required
                                value={rowData.make}
                                className="form-control mt-1"
                                placeholder="Enter Make"
                                onChange={(e) => setMake(e.target.value)}
                            // onChange={(event)=>{nameChanged(event)}}
                            // onChange={(event) => {fieldChagned(event)}}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Model</label>
                            <input
                                type="text"
                                name='model'
                                required
                                value={rowData.model}
                                className="form-control mt-1"
                                placeholder="Enter Model"
                                onChange={(e) => setModel(e.target.value)}
                            // onChange={(event) => {fieldChagned(event)}}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Color</label>
                            <input
                                type="text"
                                name='color'
                                required
                                value={rowData.color}
                                className="form-control mt-1"
                                placeholder="Enter Color"
                                onChange={(e) => setColor(e.target.value)}
                            // onChange={(event) => {fieldChagned(event)}}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Price</label>
                            <input
                                type="number"
                                name='price'
                                required
                                value={rowData.price}
                                className="form-control mt-1"
                                placeholder="Enter Price"
                                onChange={(e) => setPrice(e.target.value)}
                            // onChange={(event) => {fieldChagned(event)}}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Year</label>
                            <input
                                type="number"
                                name='year'
                                required
                                value={rowData.year}
                                className="form-control mt-1"
                                placeholder="Enter Year"
                                onChange={(e) => setYear(e.target.value)}
                            // onChange={(event) => {fieldChagned(event)}}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type='submit' className="btn btn-primary">
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
            {/* <div className="d-grid">
                <button type="submit" className="btn btn-primary create" onClick={changeProductMode}>
                    <b>Create</b>
                </button>
            </div> */}
            <div className="ag-theme-alpine" style={{ height: 400, marginTop: 50 }}>
                <AgGridReact
                    rowData={rowData ? rowData : "Do record to display"}
                    columnDefs={columnDefs}>
                </AgGridReact>
            </div>
        </div>
    )
}

export default Products;