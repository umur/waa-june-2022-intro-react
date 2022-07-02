import React from "react";

// function Product(props){
//     return (
//         <div>
//             <li>{props.name}</li>
//             <li>{props.price}</li>
//         </div>
//     )
// }

function Product(props){
    return (
        <div>
            {
                props.dataArray.map((item)=>{
                    return <p>{item.name}</p>
                })
            }
        </div>
    )
}
export default Product;