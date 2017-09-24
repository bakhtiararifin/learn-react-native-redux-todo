const API_URL = 'https://lumen-todo-api.herokuapp.com';

export const addTodo = todo => dispatch => new Promise((resolve, reject) => {
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
    response.json().then(json => {
      if (response.ok) {
        dispatch(loadTodos())
          .then(() => resolve({success: true, json}))
      } else {
        dispatch(endLoading())
        resolve({success: false, json})
      }
    })
  }, error => reject(error))
})

export const deleteTodo = id => dispatch => new Promise((resolve, reject) => {
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
      dispatch(loadTodos()).then(() => resolve(json))
    }, error => reject(error))
})

export const loadTodos = () => dispatch => new Promise((resolve, reject) => {
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
      resolve(json)
    }, error => reject(error))
})

export const startLoading = () => ({
  type: 'SET_LOADING',
  loading: true
})

export const endLoading = () => ({
  type: 'SET_LOADING',
  loading: false
})