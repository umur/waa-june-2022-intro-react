import React, { useState } from "react";


function LoginPage() {
    let [getUserName, setUserName] = useState('');
    let [getPassWord, setPassWord] = useState('');

    const setValues = (e) => {
        const targetName =e.target.name;
        switch (targetName) {
            case 'username':
                setUserName(e.target.value);
                break;
            case 'password':
                setPassWord(e.target.value);
                break;
        }
    }


    return (
        <div>
            <form>
                <img className="mb-4" src={require('../resources/img/smile.jpg')} alt="" width="98" height="75" />
                <h1 className="h3 mb-3 fw-normal">PLEASE SIGN IN</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={getUserName} name="username" onChange={setValues} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={getPassWord} name="password" onChange={setValues} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; Ashish Pokhrel</p>
            </form>
        </div>

    )
}

export default LoginPage;