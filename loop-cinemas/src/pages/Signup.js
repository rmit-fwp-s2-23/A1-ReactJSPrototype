import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import Login from "./Login";
import "./Login.css";
import Home from "./Home";
import App from "../App";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [login, setLogin] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


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
    if (!name || !email || !password) {
        setErrMsg(true);
    } else if (!validEmail(email)) {
        setErrMsg(false);
        setMessage("Invalid Email, try again");
    } else if (!validPass(password)) {
        setErrMsg(false);
        setMessage("Invalid password, try again");
    } else {
        setErrMsg(false);
        
let users = JSON.parse(localStorage.getItem("users")) || {};
        
        users[email] = {
            name: name,
            email: email,
            password: password,
            joinDate: new Date()
        };
        
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInEmail", email);
        localStorage.setItem("loggedInEmail", JSON.stringify(email));
        
        setLogin(!Login);
        navigate("/Home");
    }
}


  return (
    <div>
      {login ? (
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="container">
            <div className="form-container">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="submit-btn">
                Sign Up
              </button>

              {errMsg && (
                <Alert color="danger" className="info">
                  Please fill in all fields
                </Alert>
              )}
              {message && <Alert color="danger">{message}</Alert>}

            </div>
          </div>
        </form>
      ) : (
        <Home>
        </Home>
      )}
        
    </div>
  );
}

export default Signup;