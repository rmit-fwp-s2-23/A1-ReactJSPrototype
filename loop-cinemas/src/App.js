import React from 'react';
import Header from './header/Header.js';
import Navbar from './navbar/Navbar.js';
import MainContent from './main-content/Main-Content.js';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="wrapper">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
