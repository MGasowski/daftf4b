import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const handleAlert = () => {
        alert("Hello react");
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Homework #1 Marcin Gąsowski
                </p>

                <section>
                    <button onClick={handleAlert}>Click me!</button>
                    <a href="https://github.com/MGasowski/daftf4b">
                        <button>Git</button>
                    </a>
                </section>
            </header>

        </div>
  );
}

export default App;
