import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="Todo-App">
                    <form>
                        <input type="text" />
                        <div className="Todo-List">
                            <ul>
                                <li>
                                    <input type="checkbox" /> Create a static UI
                                </li>
                                <li>
                                    <input type="checkbox" /> Create a static UI
                                </li>
                                <li>
                                    <input type="checkbox" /> Create a static UI
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
