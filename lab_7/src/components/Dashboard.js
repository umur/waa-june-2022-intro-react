import React from 'react';
import Login from './login';
import Navbar from './Navbar';

const Dashboard = () => {

    return (
        <>
            <div className='container p-5 my-5 bg-primary text-white'>
                <Navbar />
            </div>
            <Login />
        </>
    )
}


export default Dashboard