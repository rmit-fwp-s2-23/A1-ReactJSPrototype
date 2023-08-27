import { Alert, redirect } from 'react-bootstrap';
import React, { useState } from 'react';
import App from '../App';
import Home from './Home';
import './Login.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {

const[emaillogin, setEmaillogin] = useState('');
const[passlogin, setPasslogin] = useState('');
const[errMsg, setErrMsg] = useState(false);
const [goHome, setGoHome] = useState(false);
const navigate = useNavigate();


function handleLogin(e) {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || {};
    let user = users[emaillogin];

    if(!emaillogin || !passlogin) {
        setErrMsg(true);
        console.log("Empty fields");
    }else if (!user || passlogin !== user.password) {
        setErrMsg(true);
        console.log("Incorrect Log In Details");
    }else {
        setErrMsg(false);
        localStorage.setItem("loggedInEmail", JSON.stringify(emaillogin));
        setGoHome(true);
    }
}
    



if (goHome) {
    navigate("/Home");
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