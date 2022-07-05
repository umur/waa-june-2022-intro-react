import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';


const UserDetails = () => {

    let [userState, setUserState] = useState({});

    const fetchUser = async () => {
        let response = await axios.get('http://localhost:8081/users');
        console.log(response.data);
        setUserState(response.data)
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const redirect = useNavigate();

    const onChangeFields = () => {
        //trying to redirect
        redirect('./userDetails')
    };

    return (
        <>
            <div className="container mt-3">
                <h2>User Details</h2>
                <table className="table-striped">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userState}</td>
                            <td>{userState}</td>
                            <td>{userState}</td>
                        </tr>
                        <tr>
                            <td>{userState}</td>
                            <td>{userState}</td>
                            <td>{userState}</td>
                        </tr>
                        <tr>
                            <td>{userState}</td>
                            <td>{userState}</td>
                            <td>{userState}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <button
                className="btn bg-primary"
                onClick={onChangeFields}>
                display</button> */}
        </>
    )
}

export default UserDetails