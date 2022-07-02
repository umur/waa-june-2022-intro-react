import React from 'react'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './LoginPage.css'

const LoginPage = () => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    //mount
    useEffect(() => {
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target

    }

    const handleLogin = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("Login button clicked!");
        if (!user) {
            return;
        }
    }

    return (
        <div className="container mt-5">
            <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
                <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon" />

                <form
                    onSubmit={(e) => handleLogin(e)}
                    noValidate
                    className={submitted ? 'was-validated' : ''}>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
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
                        <label htmlFor="password">Password: </label>
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

                    <button
                        className="btn btn-info w-100 mt-3"
                        disabled={loading}>
                        Sign In
                    </button>
                </form>
                <Link to="/signup" className="btn btn-link" style={{ color: 'darkgray' }}>
                    Create New Account!
                </Link>

            </div>
        </div>
    )
}

export { LoginPage }