import { React, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Login from './login'

function Signup() {

    const initialState = { fname: 'test', lname: 'test', email: '', password: '' }
    const [createUser, setCreateUser] = useState(initialState);

    const onchangeFields = (event) => {
        const copyState = { ...createUser }
        copyState[event.target.name] = event.target.value;
        setCreateUser(copyState);
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
                        </label><br /><br />
                        <button onClick={saveSignUpValues} btn className='btn-primary'>Signup
                        </button><br />
                        <Link to='/login'>SignIn! If you have an Account</Link>
                        <Routes>
                            <Route path='/login'
                                element={<Login></Login>}>
                            </Route>
                        </Routes>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;