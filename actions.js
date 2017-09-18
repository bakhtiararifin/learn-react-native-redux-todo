export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const setTodos = todos => {
  return {
    type: 'SET_TODOS',
    todos
  }
}