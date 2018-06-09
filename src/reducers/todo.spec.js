import reducer from './todo'

describe('Todo Reducer', () => {
    const result = reducer(undefined,{type: 'ANYTHING'})
    expect(result).toBeDefined()
})