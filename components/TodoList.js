import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class TodoList extends Component {
  state = {
    loading: false
  }

  onPressItem = id => {
    this.setState({ loading: true })
    this.props.deleteTodo(id).then(() => {
      this.setState({ loading: false })
    });
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