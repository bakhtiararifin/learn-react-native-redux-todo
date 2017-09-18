import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class TodoForm extends Component {
  state = { todo: '' };

  onPressAdd = () => {
    fetch('https://lumen-todo-api.herokuapp.com/todos/add', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({todo: this.state.todo})
    })
    .then(response => response.json())
    .then(response => {
      Actions.todoList();
    })
  }

  render() {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;

    return (
      <View style={{ backgroundColor: '#ddd' }}>
        <View style={containerStyle}>
          <TextInput
            onChangeText={todo => this.setState({ todo })}
            value={this.state.todo}
          />
          <Button
            buttonStyle={buttonStyle}
            title="Add"
            onPress={this.onPressAdd}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyle: {
    marginBottom: 8
  }
};


export default TodoForm;