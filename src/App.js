/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import { Actions } from 'react-native-router-flux';



export default class App extends Component{
  constructor(props) {
    super(props);
  }

  state = { loading:true }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC2-7DXGpnwEojmr-XJlBf340q8f-lR4CA",
      authDomain: "senior-project-93b55.firebaseapp.com",
      databaseURL: "https://senior-project-93b55.firebaseio.com",
      projectId: "senior-project-93b55",
      storageBucket: "senior-project-93b55.appspot.com",
      messagingSenderId: "965738840992"
    });

  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <Router />
        </View>
      </Provider>
    );
  }
};

const styles = {
  logoutStyle:{
    flex:1
  }
}


