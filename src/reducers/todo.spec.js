import reducer from './todo'

describe('Todo Reducer', () => {
    test('Returns a state object', () => {
        const result = reducer(undefined,{type: 'ANYTHING'})
        expect(result).toBeDefined()
    })

    test('Adds a todo', () => {
        const startState = {
            todos: [
                {id:1,name:'Create Static UI', isComplete: true},
                {id:2,name:'Create Static UI', isComplete: false},
                {id:3,name:'Create Static UI', isComplete: false},
            ]
        }
        const expectedState = {
            currentTodo: "",
            todos: [
                {id:1,name:'Create Static UI', isComplete: true},
                {id:2,name:'Create Static UI', isComplete: false},
                {id:3,name:'Create Static UI', isComplete: false},
                {id:4,name:'Added todo', isComplete: false},
            ]
        }
        const action = {
            type: 'TODO_ADD',
            payload: {id:4,name:'Added todo', isComplete: false
            }
        }

        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
})