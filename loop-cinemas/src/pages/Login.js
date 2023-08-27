import { Alert } from 'react-bootstrap';
import { redirect } from 'react-router-dom';
import React, { useState } from 'react';
import App from '../App';
import Home from './Home';
import './Login.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Login() {

const[emaillogin, setEmaillogin] = useState('');
const[passlogin, setPasslogin] = useState('');
const[errMsg, setErrMsg] = useState(false);
//const[home, setHome] = useState(true);
const [goHome, setGoHome] = useState(false);


function handleLogin(e) {
    e.preventDefault();
    let user = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillogin || !passlogin) {
        setErrMsg(true);
        console.log("Empty")
    }else if (passlogin !== pass || emaillogin!== user) {
        setErrMsg(true)
    }else {
        //setHome(!home);
        setErrMsg(false);
        setGoHome(true);
    }
}

if (goHome) {
    return <redirect to="/" />;
  }


    return (
        <div>
            <h1>Login</h1>


            <form onSubmit={handleLogin}>
                <div className='container'>
                <div className='form-container'>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='text' className='form-control' placeholder='Enter email' onChange={(event)=> setEmaillogin(event.target.value)}/>

                    </div>

                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' placeholder='Enter password' onChange={(event)=> setPasslogin(event.target.value)}/>

                    </div>
                    <button type='submit' className='submit-btn'>Log In</button>
                    {errMsg && (
                    <Alert color="primary" variant='danger' className='info'>
                        Incorrect Log In Details
                    </Alert>
                    )}
                </div>
                </div>
            </form>
        </div>
    );
}

export default Login;