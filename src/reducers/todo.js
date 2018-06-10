import {getTodos} from '../lib/todoServices'

const initState = {
    todos: [],
    currentTodo: ''
}

const TODO_ADD = 'TODO_ADD'
const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

export const updateCurrent = (value) => ({type: CURRENT_UPDATE,payload: value})
export const loadTodos = (todos)  => ({type: TODOS_LOAD, payload: todos})
export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
        //.then(todos => console.log(todos))
    }
}


export default (state = initState,action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state,todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE:
            return {...state,currentTodo: action.payload}
        case TODOS_LOAD:
            return {...state,todos: action.payload}
        default:
            return state
    }
}