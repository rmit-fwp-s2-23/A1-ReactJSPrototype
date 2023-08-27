import { Alert } from 'react-bootstrap';
import { redirect } from 'react-router-dom';
import React, { useState } from 'react';
import App from '../App';
import './Login.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ImageLogo from "../images-icons/film.png";

function Login() {

const[emaillogin, setEmaillogin] = useState('');
const[passlogin, setPasslogin] = useState('');
const[errMsg, setErrMsg] = useState(false);
//const[home, setHome] = useState(true);
const [goHome, setGoHome] = useState(false);


function handleLogin(e) {
    e.preventDefault();
    let userEmail = localStorage.getItem("Email");
    let userPass = localStorage.getItem("Password");
    
    let user = userEmail ? userEmail.replace(/"/g,"") : "";
    let pass = userPass ? userPass.replace(/"/g,"") : "";

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
    return <Redirect to="/" />;
  }


    return (
        <>
            <form onSubmit={handleLogin}>
                <div className='container'>
                    <div className='form-header'>
                        <div className='form-title'>
                            <img src={ImageLogo} />
                            <h1>Loop Rewards</h1>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type='text' className='form-control' placeholder='Enter email' onChange={(event)=> setEmaillogin(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' className='form-control' placeholder='Enter password' onChange={(event)=> setPasslogin(event.target.value)}/>
                        </div>
                        <div>
                            <p>Don't have an account? <Link to="/signup">Click here</Link></p>
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
        </>
    );
}

export default Login;