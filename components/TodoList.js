import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';

class TodoList extends Component {
  render() {
    return (
      <List containerStyle={{marginTop: 10}}>
        {
          this.props.todos.map((todo) => (
            <ListItem
              key={todo.id}
              title={todo.todo}
              onPress={() => this.props.deleteTodo(todo.id)}
            />
          ))
        }
      </List>
    );
  }
}

export default TodoList;