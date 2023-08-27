import React from 'react';
import Header from './header/Header.js';
import Navbar from './navbar/Navbar.js';
import MainContent from './main-content/Main-Content.js';
import Footer from './footer/Footer.js';
import { useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="wrapper">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;