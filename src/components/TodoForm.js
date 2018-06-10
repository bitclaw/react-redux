import React from 'react';

export default (props) => {
    console.log('Rendering form')
    const {currentTodo, changeCurrent} = props
    const handleInputChange = (event) => {
        const value = event.target.value
        changeCurrent(value)
    }

    return (
        <form>
            <input type="text"
                   onChange={handleInputChange}
                   value={currentTodo}/>
        </form>
    )
}
