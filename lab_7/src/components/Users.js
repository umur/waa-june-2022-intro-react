import React from 'react';
import User from './User';

function Users(props) {

    return (
        <div>
            {
                props.users.map((item) => {
                    return <User
                        // id={item.id}
                        email={item.email}
                        password={item.password}
                        firstName={item.firstName}
                        lastName={item.lastName}
                    />
                })
            }
        </div>
    )
}

export default Users;