import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class TodoForm extends Component {
  state = { todo: '' };

  onPressAdd = () => {
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' })
  }

  render() {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={searchTextStyle}
          onChangeText={todo => this.setState({ todo })}
          value={this.state.todo}
        />
        <Button
          buttonStyle={buttonStyle}
          title="Add"
          onPress={this.onPressAdd}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row'
  },
  searchTextStyle: {
    flex: 1
  },
  buttonStyle: {
    height: 30,
    marginBottom: 8
  }
};


export default TodoForm;