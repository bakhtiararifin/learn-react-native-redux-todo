import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { getTodos, deleteTodo } from '../services/todoService';

class TodoList extends Component {
  state = {
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true });
    getTodos()
      .then(todos => {
        this.props.setTodos(todos)
        this.setState({ loading: false });
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
    if (this.state.loading) {
      return;
    }

    this.setState({ loading: true });

    deleteTodo(id)
      .then(getTodos)
      .then(todos => {
        this.props.setTodos(todos)
        this.setState({ loading: false });
      })
  }

  render() {
    let loading = this.state.loading;
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <View style={{ marginTop: 10 }}>
          <Button
            title="Add Todo"
            onPress={() => Actions.todoForm()}
          />
        </View>
        {loading ? (
          <Text style={{ color: 'red', textAlign: 'center' }}>
            Loading...
          </Text>
        ) : null}
        <List containerStyle={{ marginBottom: 10 }}>
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