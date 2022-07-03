import React from 'react';

function User(props){

    return (
        <>
            <h1>{props.id}</h1>
            <h1>{props.email}</h1>
            <h1>{props.password}</h1>
            <h1>{props.firstName}</h1>
            <h1>{props.lastName}</h1>
        
        </>
    )
}

export default User;
