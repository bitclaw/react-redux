import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'

// const todoChangeHandler = (value) => store.dispatch(updateCurrent(value))

const actions = bindActionCreators({
    todoChangeHandler: updateCurrent
},store.dispatch)

const render = () => {
    const state = store.getState()
    ReactDOM.render(<App todos = {state.todos}
                         currentTodo={state.currentTodo}
                         changeCurrent={actions.todoChangeHandler}
    />, document.getElementById('root'));
}

render()

store.subscribe(render)

registerServiceWorker();
