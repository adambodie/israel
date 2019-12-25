import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants/action_types'

export const addTodo = (content, id) => ({
    type: ADD_TODO,
    payload: {
        id: id++,
        content
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
})

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: { id }
})