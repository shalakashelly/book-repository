import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Welcome to Online Book Shopping App!</h2>
       <h4>Sign-in to continue</h4>
       <label>Username:</label>
       <select name="username">
        <option>John</option>
        <option>Tina</option>
        <option>Samuel</option>
        <option>Greg</option>
       </select>
       <br/>
       <button>Submit</button>
      </header>
    </div>
  );
}

export default App;
