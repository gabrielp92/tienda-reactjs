import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <header>
        <NavBar/> 
      </header>
      <main className="App-header bg-white">
        {/*
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className={styles.titulo}>Próximamente tienda con React js!!!</h1>
        */}
      </main>
      <footer className="footer font-bold bg-fuchsia-300 py-2">
        <h3>Gabriel Ignacio Paez</h3>
      </footer>
      {/*
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
