import { Alert } from 'react-bootstrap';
import React, { useState } from 'react'
import Login from './Login';
import './Login.css';
import ImageLogo from "../images-icons/film.png";
import { Link } from 'react-router-dom';

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(false);
    const [login, setLogin] = useState(true);
    const [message, setMessage] = useState('')

    function validEmail(email) {
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailCheck.test(email);
    }

    function validPass(password) {
        const passCheck = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passCheck.test(password);
    }



function handleSubmit(e) {
    e.preventDefault();
    if(!name || !email || !password) {
        setErrMsg(true);
    } else if (!validEmail(email)) {
        setErrMsg(false);
        setMessage("Invalid Email, try again")

    } else if (!validPass) {
        setErrMsg(false);
        setMessage("Invalid password, try again")

    } else {
        setErrMsg(false);
        localStorage.setItem("Name", (name));
        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem("Password", JSON.stringify(password));
        setLogin(!Login);
        setMessage("Success")
    }

}




    return(
        <div>

       {login ? (           
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='form-header'>
                        <div className='form-title'>
                            <img src={ImageLogo} />
                            <h1>Loop Rewards</h1>
                        </div>
                        <div>
                            <h3>Already a member? <Link to="/login">Log in</Link></h3>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type='text' className='form-control' placeholder='Enter name' onChange={(event)=> setName(event.target.value)}/>

                        </div>

                        <div className='form-group'>
                            <label>Email</label>
                            <input type='text' className='form-control' placeholder='Enter email' onChange={(event)=> setEmail(event.target.value)}/>

                        </div>

                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' className='form-control' placeholder='Enter password' onChange={(event)=> setPassword(event.target.value)}/>

                        </div>
                        <button type='submit' className='submit-btn'>Sign Up</button>

                    {errMsg && (
                        <Alert color="danger" className='info'>
                            Please fill in all fields
                        </Alert>
                    )}
                    {message && (
                        <Alert color='danger'>
                            {message}
                        </Alert>
                    )}
                    </div>
                </div>
            </form>

                ):(
                <Login></Login>
                )
        }
        </div>
    )
}

export default Signup;