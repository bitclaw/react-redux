import reducer from './todo'

describe('Todo Reducer', () => {
    const result = reducer(udefined,{type: 'ANYTHING'})
    expect(result).toBeDefined()
})