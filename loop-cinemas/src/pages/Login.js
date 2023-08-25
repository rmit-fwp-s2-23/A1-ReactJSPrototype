import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";

function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
      <h2 className="lg">Login Page</h2>
      <form className="container">
        <div className="form-container">
         <Form.Group className="details">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control onChange={(blank) => {setUsername(blank.target.value)}} type="text" name="Email" placeholder="Enter Email"/>
         </Form.Group>

         <Form.Group className="details">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control onChange={(blank) => {setPassword(blank.target.value)}} type="text" name="Password" placeholder="Enter Password"/>
         </Form.Group>
         <input type="submit" className="login-btn" value="Login" />
        </div>
      </form>
    </>
    );
}

export default Login;