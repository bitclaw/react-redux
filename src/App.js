import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {connect} from 'react-redux'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'
import store from "./store";

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

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent},dispatch)
const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App)
export default ConnectedApp