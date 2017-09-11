import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';

class TodoList extends Component {
  render() {
    return (
      <List containerStyle={{marginTop: 10}}>
        {
          this.props.todos.map((x, i) => (
            <ListItem
              key={i}
              title={x.todo}
              onPress={() => this.props.onPressTodo(i)}
            />
          ))
        }
      </List>
    );
  }
}

export default TodoList;