const initState = {
    todos: [
        {id:1,name:'Create a store', isComplete: true},
        {id:2,name:'Load state through a store', isComplete: true},
        {id:3,name:'Handle state changes with Redux', isComplete: false},
    ],
    currentTodo: ''
}


export default (state = initState,action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state,todos: state.todos.concat(action.payload)}
        case 'CURRENT_UPDATE':
            return {...state,currentTodo: action.payload}
        default:
            return state
    }
}