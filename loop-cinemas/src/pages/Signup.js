import { useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./App.css";


function App() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
      <h2 className="sg">Sign Up Page</h2>
      <form className="container">
        <div className="form-container">

        <Form.Group className="details">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control onChange={(blank) => {setName(blank.target.value)}} type="text" name="Name" placeholder="Enter Name"/>
         </Form.Group>
        
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


export default App;
