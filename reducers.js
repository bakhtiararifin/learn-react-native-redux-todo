const initialState = {
  loading: false,
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.todo
        ]
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }

    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.loading
      }

    default:
      return state
  }
}

export default reducer