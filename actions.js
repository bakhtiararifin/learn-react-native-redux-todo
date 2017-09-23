const API_URL = 'https://lumen-todo-api.herokuapp.com';

export const addTodo = todo => dispatch => {
  return fetch(API_URL + '/todos/add', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo })
  })
    .then(response => response.json())
    .then(
      json => {
        dispatch({
          type: 'ADD_TODO',
          todo : json
        })
      },
      error => console.log(error)
    )
}

export const deleteTodo = id => dispatch => {
  return fetch(API_URL + '/todos/delete', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: 'DELETE_TODO',
        id
      })
    }, error => console.log(error))
}

export const loadTodos = () => dispatch => {
  return fetch(API_URL + '/todos', {
    method: 'post'
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: 'SET_TODOS',
        todos: json
      })
      return json
    }, error => console.log(error))
}

export const fetchLoadTodos = () => dispatch => {
  return dispatch(loadTodos());
}