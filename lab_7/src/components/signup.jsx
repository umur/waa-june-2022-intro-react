import {React, useState} from 'react';

function Signup() {

    //const [userName, setUserName] = useState("");
    const initialState= {fname:'test',lname:'test',email:'',password:''}
    const [createUser, setcreateUser] = useState(initialState);

    const onchangeFields =(event)=>{
    const copyState = {...createUser}
    copyState[event.target.name]= event.targetvalue;
    setcreateUser(copyState);
    }
    //fetch
    const saveSignUpValues=()=>{
        console.log(createUser);
    }

    return (
        <div className="container">
            <div className="welcome">
                <h2>Welcome to MIU WAA course </h2>
                <form>
                    <label>FirstName :
                        <input type="text" 
                        defaultValue={createUser.fname}
                        onChange={onchangeFields}
                        name='fname'/><br></br>
                    </label>
                    <label> LastName:
                        <input type="text" 
                        name='lname'
                            defaultValue={createUser.lname}
                            onChange={onchangeFields}
                        />
                    </label><br></br>
                    <label> email:
                        <input type="email" 
                        name='email'
                            defaultValue={createUser.email}
                            onChange={onchangeFields}
                        />
                    </label><br></br>
                    <label> Password:
                        <input type="password" 
                        name='password'
                            defaultValue={createUser.password}
                            onChange={onchangeFields}
                        />
                    </label><br></br>
                    <button onClick={saveSignUpValues}>Signup
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;