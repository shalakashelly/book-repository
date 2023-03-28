import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Welcome to Online Book Shopping App!</h2>
       <br/>
       <div>
         <label>What is your name?</label>
         <input type="text"/>
       </div>
       <br/>
       <button onClick={loginUser}>Submit</button>
      </header>
    </div>
  );
}

function loginUser() {
  return (true);
}

export default App;
