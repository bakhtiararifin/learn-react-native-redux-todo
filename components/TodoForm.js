import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class TodoForm extends Component {
  state = {
    todo: '',
    error: null
  };

  onPressAdd = () => {
    this.props.addTodo(this.state.todo)
      .then(response => {
        if (response.ok) {
          Actions.todoList();
        } else {
          response.json()
            .then(json => this.setState({error: json.todo[0]}))
        }
      })
  }

  render() {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;

    let text = this.props.loading ? 'Loading...' :
      this.state.error ? this.state.error : null;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <View style={containerStyle}>
          <TextInput
            onChangeText={todo => this.setState({ todo })}
            value={this.state.todo}
          />
          {text ? (
            <Text style={{ color: 'red', textAlign: 'center', marginBottom: 5 }}>
              {text}
            </Text>
          ) : null}
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