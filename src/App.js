import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <nav>
          <a href={null}>Accueil</a>
          <a href={null}>Couturiers</a>
          <a href={null}>Clients</a>
        </nav>
      </div>
      <div className="content">
        Derniers couturiers 
      </div>
    </div>
  );
}

export default App;
