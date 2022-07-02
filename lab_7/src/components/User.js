import {React, useState} from 'react';

// function User(props) {
//     return <li>User : {props.firstName}</li>;
// }
function User () {

  const [firstName, setFirstName] = useState("");
    //fetch
    return (
        <div>
            <h1>User details</h1>
            <form>
                <ul>
                    {User.map((user) => <User firstName={firstName}/>)}
                </ul>
            </form>
        </div>
    )
}

export default User;