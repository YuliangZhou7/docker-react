import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Hey im running inside a docker container");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload. MWHAAHAHAHAHA I AM DIFFERENT
        </p> */}
        <p>TESTING SOME NEW CHANGES</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
