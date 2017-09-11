import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import AppHeader from './components/AppHeader';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    todos: [
      { todo: 'Clean the house' },
      { todo: 'Do Homework' },
    ]
  }
 
  onPressAdd = todo => {
    this.state.todos.push({ todo });
    this.setState({ todos: this.state.todos });
  }

  onPressTodo = index => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    })
  }
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="Simple Todo App" />
        <TodoForm onPressAdd={this.onPressAdd} />
        <TodoList todos={this.state.todos} onPressTodo={this.onPressTodo} />
      </View>
    );
  }
}