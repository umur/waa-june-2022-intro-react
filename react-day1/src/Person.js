import React from "react";

function Person(props){
    
    return (
        <div>
           
      <table class="ui">
        {/* <thead>
        <tr>
          <th>Id</th>
          <th>Firstname</th>
          <th>lastName</th>
          <th>Zip</th>
        </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>{props.Id}</td>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td> {props.zip}</td>
          </tr>
          </tbody>
      </table>
      </div>
            /* {<h1> {props.Id}</h1>
            <h2> {props.fname}</h2>
            <h3> {props.lname}</h3>
            <h4> {props.zip}</h4>} */
        // </div>
    )
}

export default Person;