import React from "react";
import { Table } from "react-bootstrap";
import '../css/list-product.css';

function ListProduct(props) {  
    return(
        <div>
            <h3>List of Products</h3>
            <Table striped bordered hover className="product-table">
        
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {
          props.items.map(item=>{
              return(
                  <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                
              </tr>
            </tbody>
              )
          })
        }
       
      </Table> 
        </div>
   
    );
}

export default ListProduct;