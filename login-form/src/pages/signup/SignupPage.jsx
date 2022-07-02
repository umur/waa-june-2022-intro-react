import React, { useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SignupPage.css'

const SignupPage = () => {

    // need to implement user class
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    //mount effect
    useEffect(() => {
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
    }

    //handle register
    const handleRegister = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("submit button clicked!");
        if (!user) {
            return;
        }

        setLoading(true);
    }

    return (
        <div className="container mt-5">
            <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
                <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon" />

                <form
                    onSubmit={(e) => handleRegister(e)}
                    noValidate
                    className={submitted ? 'was-validated' : ''}>
                    <div className="form-group">
                        <label htmlFor="name">Username: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="username"
                            value={user}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Username is required.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="email"
                            value={user}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Email is required.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="password"
                            value={user}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Password is required.
                        </div>
                    </div>

                    <button className="btn btn-info w-100 mt-3" disabled={loading}>
                        Sign Up
                    </button>

                </form>
                <Link to="/login" className="btn btn-link" style={{ color: 'darkgray' }}>
                    I have an Account!
                </Link>
            </div>
        </div>
    )
}

export { SignupPage }