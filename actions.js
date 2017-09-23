const API_URL = 'https://lumen-todo-api.herokuapp.com';

export const addTodo = todo => dispatch => {
  dispatch(startLoading())
  return fetch(API_URL + '/todos/add', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo })
  })
  .then(response => {
    if (response.ok) {
      dispatch(loadTodos())
    } else {
      dispatch(endLoading())
    }

    return response
  })
}

export const deleteTodo = id => dispatch => {
  dispatch(startLoading())
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
      dispatch(loadTodos())
    }, error => console.log(error))
}

export const loadTodos = () => dispatch => {
  dispatch(startLoading())
  return fetch(API_URL + '/todos', {
    method: 'post'
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: 'SET_TODOS',
        todos: json
      })
      dispatch(endLoading())
    }, error => console.log(error))
}

export const startLoading = () => ({
  type: 'SET_LOADING',
  loading: true
})

export const endLoading = () => ({
  type: 'SET_LOADING',
  loading: false
})