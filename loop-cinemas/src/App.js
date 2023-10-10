import React from 'react';
import Header from './components/header/Header.js';
import Navbar from './components/navbar/Navbar.js';
import MainContent from './main-content/Main-Content.js';
import Footer from './components/footer/Footer.js';
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;