import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class TodoList extends Component {
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
                  onPress={() => this.props.deleteTodo(todo.id)}
                />
              ))
            }
          </List>
        </View>
    );
  }
}

export default TodoList;