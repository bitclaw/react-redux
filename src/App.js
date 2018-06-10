import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {connect} from 'react-redux'
import {updateCurrent} from './reducers/todo'

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
                        changeCurrent={this.props.updateCurrent}
                    />
                    <TodoList todos={this.props.todos}/>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => state,
    {updateCurrent}
)(App)