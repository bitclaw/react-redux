'use strict';

import React, { Component } from 'react';
// import logo from './logo.svg';
//import './App.css';

class App extends Component {

    constructor (props) {
        super(props)
        // this.state = {
        //     popup: false,
        //     step: 0
        // };
    }

    // counter = (state=0, action) => {
    //     switch (action.type) {
    //         case 'INCREMENT':
    //             return state +1;
    //         case 'DECREMENT':
    //             return state -11;
    //         default:
    //             return state;
    //     }
    // };

    // expect(
    //     counter(0,{type: 'INCREMENT'})
    // ).toEqual(1);

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
