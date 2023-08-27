import React from 'react';
import Header from './header/Header.js';
import Navbar from './navbar/Navbar.js';
import MainContent from './main-content/Main-Content.js';
import Footer from './footer/Footer.js';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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