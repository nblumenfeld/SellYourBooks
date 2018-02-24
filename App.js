/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import BookList from './src/components/BookList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  constructor(props) {
    super(props);
  }

renderAlbums() {
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
    console.log(this.state);

    return (
      <View style={{flex:1}} >
        {/* <LoginForm /> */}
        <Header headerText={'Test Text'}/>
        <BookList/>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#69696969',
  }
});


