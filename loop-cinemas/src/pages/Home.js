import React, { useState, useEffect } from "react";

function Home() {
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
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Joined: {new Date(userData.joinDate).toLocaleDateString("en-AU", { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}</p>
    </div>
  );
}

export default Home;