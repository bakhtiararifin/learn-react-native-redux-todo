import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import AppHeader from './components/AppHeader';
import TodoFormContainer from './components/TodoFormContainer';
import TodoListContainer from './components/TodoListContainer';

const store = createStore(reducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
          <AppHeader headerText="Simple Todo App" />
          <TodoFormContainer />
          <TodoListContainer />
        </View>
      </Provider>
    );
  }
}