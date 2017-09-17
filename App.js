import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import TodoFormContainer from './components/TodoFormContainer';
import TodoListContainer from './components/TodoListContainer';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="todoList"
              component={TodoListContainer}
              title="Todo List"
              initial
            />
            <Scene
              key="todoForm"
              component={TodoFormContainer}
              title="Todo Form"
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}