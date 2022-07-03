import React, { useState } from "react";



function SignUp() {
    let [getUsername, setUsername] = useState('');
    let [getPassWord, setPassWord] = useState('');
    let [getAddress, setAddress] = useState('');
    let [getRole, setRole] = useState('');

    const setValues = (e) => {
        const targetName = e.target.name;
        switch (targetName) {
            case 'username':
                setUsername(e.target.value);
                break;
            case 'password':
                setPassWord(e.target.value);
                break;
        }
    }

    return (
        <>
            <form>
                <h1 className="h3 mb-3 fw-normal">SIGN UP</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={getUsername} name="username" onChange={setValues} />
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={getPassWord} name="password" onChange={setValues} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <select className="form-select" aria-label="Default select example">
                        <option>--Select--</option>
                        <option>Admin</option>
                        <option>Client</option>
                    </select>
                </div>
                <div className="mt-5">
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; Ashish Pokhrel</p>
            </form>
        </>
    )
}

export default SignUp;