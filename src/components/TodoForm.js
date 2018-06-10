import React from 'react';
import {connect} from 'react-redux'
import {updateCurrent} from '../reducers/todo'

const TodoForm = (props) => {
    console.log('Rendering form')
    const {currentTodo, updateCurrent} = props
    const handleInputChange = (event) => {
        const value = event.target.value
        updateCurrent(value)
    }

    return (
        <form>
            <input type="text"
                   onChange={handleInputChange}
                   value={currentTodo}/>
        </form>
    )
}


export default connect(
    (state) => ({currentTodo: state.currentTodo}),
    {updateCurrent}
)(TodoForm)