import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import Form1Container from './Form1Container';
import Form2Container from './Form2Container';

class App extends Component {
  constructor() {
    super();
    this.store = createStore(myReducer,applyMiddleware(thunkMiddleware));
  }

  render() {
    console.log('>>' + this.store.getState().pageShown);
    switch (this.store.getState().pageShown) {
      case 'page1':
        return (
          <Provider store={this.store}>
            <Form1Container />
          </Provider>
        );
      case 'page2':
        return (
          <Provider store={this.store}>
            <Form2Container />
          </Provider>
        );
      default:
        return;
    }
  }
}

export default App;
