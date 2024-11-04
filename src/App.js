import React, { useState } from 'react';
import './App.css';

function App() {
  // Define state variables to store the information
  const [title] = useState("Welcome to Fullstack Development - I");
  const [subtitle] = useState("React JS Programming Week09 Lab exercise");
  const [studentId] = useState("101431938");
  const [name] = useState("Basil Shaji");
  const [college] = useState("George Brown College, Toronto");

  return (
    <div className="App">
      <header className="App-header">
        {/* Add React logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="App-logo"
        />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{studentId}</p>
        <p>{name}</p>
        <p>{college}</p>
      </header>
    </div>
  );
}

export default App;

