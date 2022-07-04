import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function Product() {
  const initialSate = {
    name: "test",
    price: "test",
    user_id: "test",
  };
  const [saveProductState, setProductState] = useState(initialSate);
  const fieldChanged = (event) => {
    const copyState = { ...saveProductState };
    copyState[event.target.name] = event.target.value;
    setProductState(copyState);
  };

  const onClicked = () => {
    alert(JSON.stringify(saveProductState));
    console.log(JSON.stringify(saveProductState));
  };
  return (
    <body>
      <h1>Product </h1>
      <table class="center">
        <tr>
          <td>Name:</td>
          <td>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={saveProductState.name}
              onChange={(event) => {
                fieldChanged(event);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Price:</td>
          <td>
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={saveProductState.price}
              onChange={(event) => {
                fieldChanged(event);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>User_id:</td>
          <td>
            <input
              type="text"
              id="user_id"
              name="user_id"
              defaultValue={saveProductState.user_id}
              onChange={(event) => {
                fieldChanged(event);
              }}
            />
          </td>
        </tr>
      </table>
      <br />
      <div>
      <input type="button" value="Product" onClick={onClicked} />
      </div>
    </body>
  );
}

export default Product;
