import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants/action_types'

const initialState = {
    allIds: [0,1,2,3,4],
    byIds: [
        {content: 'Shirts',  completed: false},
        {content:'Pants',  completed: false}, 
        {content:'Passport', completed: false}, 
        {content: 'Shoes', completed: false}, 
        {content:'Camera', completed: false}
    ]
  }
export default function todos(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO: {
            const { content } = action.payload
            const id = state.allIds.length
            if (content !== "") {
              return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            } 
      } else {
        alert("Try again")
        return state
      }
  }
  case REMOVE_TODO: {
      const { id } = action.payload;
      let newIds = Object.assign([], state.allIds)
      let newByIds = Object.assign([], state.byIds)
      newIds.pop()
      newByIds.splice(id, 1)
      return {
        ...state,
        byIds: newByIds,
        allIds: newIds
      }
}
  case TOGGLE_TODO: {
        const { id } = action.payload;
        return {
        ...state,
          byIds: {
              ...state.byIds,
                [id]: {
                  ...state.byIds[id],
                  completed: !state.byIds[id].completed
                }
          }
        }
  }
  default:
      return state;
    }
}