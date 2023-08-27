import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    const [userData, setUserData] = useState({ name: "", email: "", joinDate: "" });

    useEffect(() => {
      const users = JSON.parse(localStorage.getItem("users")) || {};
  const loggedInEmail = JSON.parse(localStorage.getItem("loggedInEmail"));
      const currentUser = users[loggedInEmail];
      if (currentUser) {
        setUserData(currentUser);
      }
    }, []);
  
    return (
        <>
            {userData.name ? (
                <div className="profileBoxStyle">
                    <h1>Welcome to the Home Page</h1>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Joined: {new Date(userData.joinDate).toLocaleDateString("en-AU", { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
            ) : (
                <div>
                    <h1>Sign Up</h1>
                        <p>If you're not a member yet! <Link to="/signup">Click here!</Link></p>
                </div>
            )}
        </>
    );
}

export default Sidebar;