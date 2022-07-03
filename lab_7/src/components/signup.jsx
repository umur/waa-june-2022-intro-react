import { React, useState } from 'react';

function Signup() {

    //const [userName, setUserName] = useState("");
    const initialState = { fname: 'test', lname: 'test', email: '', password: '' }
    const [createUser, setcreateUser] = useState(initialState);

    const onchangeFields = (event) => {
        const copyState = { ...createUser }
        copyState[event.target.name] = event.targetvalue;
        setcreateUser(copyState);
    }
    //fetch
    const saveSignUpValues = () => {
        console.log(createUser);
    }

    return (
        <div className="container-fluid container">
            <h2>Welcome to MIU WAA course </h2>
            <div className="welcome border alert alert-success container">
                <form className="minForm">
                    <div className="column">
                        <label>FirstName :
                            <input type="text" className='form-control'
                                defaultValue={createUser.fname}
                                onChange={onchangeFields}
                                name='fname' /><br></br>
                        </label>
                    </div>
                    <div className="column">
                        <label> LastName:
                            <input type="text" className='form-control'
                                name='lname'
                                defaultValue={createUser.lname}
                                onChange={onchangeFields}
                            />
                        </label><br></br>
                        <label> email:
                            <input type="email" className='form-control'
                                name='email'
                                defaultValue={createUser.email}
                                onChange={onchangeFields}
                            />
                        </label><br></br>
                        <label> Password:
                            <input type="password" className='form-control'
                                name='password'
                                defaultValue={createUser.password}
                                onChange={onchangeFields}
                            />
                        </label><br/><br/>
                        <button onClick={saveSignUpValues} btn className='btn-primary'>Signup
                        </button>
                        <a href="http://localhost:3001/"><br /> SIGNIN </a>If you have an Account
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;