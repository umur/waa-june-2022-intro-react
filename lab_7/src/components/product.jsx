import React, { useState, useEffect } from "react";
import axios from 'axios'

export const UserContext = React.createContext();

const Product = () => {

  let [userState, setUserState] = useState({});

  const fetchUser = async () => {
    let response = await axios.get('http://localhost:8081/users');
    console.log(response.data);
    setUserState({ users: response.data })
  }

  useEffect(() => {
    fetchUser();
  }, [])



  const onChangeFields = (event) => {
    const copyState = { ...userState };
    copyState[event.target.name] = event.target.value;
    setUserState(copyState);
  };

  console.log(userState);
  return (

    <div className="table-group">
      <h1 className="product">List of Product</h1>
      <table className="prodcutList">
        <thead>
          <th>User Id :{userState.id} </th>
          <th>User First Name: {useState.firstName} </th>
          <th>User last Name:{userState.lastName}</th>
        </thead>
      </table>
      <button onClick={onChangeFields}>Display Users</button>
    </div>
  );
};

export { Product };
