import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Todo List</h1>
                </header>
                <div className="Todo-App">
                    <form>
                        <input type="text" />
                        <div className="Todo-List">
                            <ul>
                                {this.props.todos.map(todo => (
                                    <li key={todo.id}>
                                        <input type="checkbox" defaultChecked={todo.isComplete}/>
                                        {todo.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
