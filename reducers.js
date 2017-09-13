import uuid from 'uuid';

const reducer = (state = {todos: []}, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [
            ...state.todos,
            {
                id: uuid.v4(),
                todo: action.todo
            }
          ]
        }
      case 'DELETE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.id)
        }
      default:
        return state
    }
  }
  
  export default reducer