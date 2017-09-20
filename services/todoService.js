const API_URL = 'https://lumen-todo-api.herokuapp.com';

export const getTodos = () => {
  return fetch(API_URL + '/todos', {
    method: 'post'
  })
    .then(response => response.json())
    .then(data => data.map(x => ({
      id: x.id,
      todo: x.todo
    })))
}

export const deleteTodo = id => {
  return fetch(API_URL + '/todos/delete', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })
}

export const addTodo = todo => {
  return fetch(API_URL + '/todos/add', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo })
  })
}