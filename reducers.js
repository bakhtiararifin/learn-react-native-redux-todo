const reducer = (state = {todos: []}, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [
            ...state.todos,
            action.todo
          ]
        }
      case 'DELETE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.id)
        }
      case 'SET_TODOS':
        return {
          todos: action.todos
        }
      default:
        return state
    }
  }
  
  export default reducer