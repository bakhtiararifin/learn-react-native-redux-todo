import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class TodoList extends Component {
  componentDidMount() {
    this.loadTodos()
      .then(todos => {
        this.props.setTodos(todos)
      })
  }

  loadTodos = () => {
    return fetch('https://lumen-todo-api.herokuapp.com/todos', {
      method: 'post'
    })
    .then(response => response.json())
    .then(data => data.map(x => ({
      id: x.id,
      todo: x.todo
    })))
  }

  onPressItem = id => {
    fetch('https://lumen-todo-api.herokuapp.com/todos/delete', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    .then(this.loadTodos)
    .then(todos => {
      this.props.setTodos(todos)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <View style={{ marginTop: 10 }}>
          <Button
            title="Add Todo"
            onPress={() => Actions.todoForm()}
          />
        </View>
        <List containerStyle={{marginTop: 10}}>
            {
              this.props.todos.map((todo) => (
                <ListItem
                  key={todo.id}
                  title={todo.todo}
                  onPress={() => this.onPressItem(todo.id)}
                />
              ))
            }
          </List>
        </View>
    );
  }
}

export default TodoList;