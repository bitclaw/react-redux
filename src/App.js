import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Todo List</h1>
                </header>
                <div className="Todo-App">
                    <TodoForm
                        currentTodo={this.props.currentTodo}
                        changeCurrent={this.props.changeCurrent}
                    />
                    <TodoList todos={this.props.todos}/>
                </div>
            </div>
        );
    }
}

//export default App;

const mapStateToProps = (state) => state
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp