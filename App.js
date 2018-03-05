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
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import Header from './src/components/common/Header';
import Footer from './src/components/common/Footer';
import BookList from './src/components/BookList';
import Spinner from './src/components/common/Spinner';
import Button from './src/components/common/Button';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component{
  constructor(props) {
    super(props);
  }

  state = { loggedIn:null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC2-7DXGpnwEojmr-XJlBf340q8f-lR4CA",
      authDomain: "senior-project-93b55.firebaseapp.com",
      databaseURL: "https://senior-project-93b55.firebaseio.com",
      projectId: "senior-project-93b55",
      storageBucket: "senior-project-93b55.appspot.com",
      messagingSenderId: "965738840992"
    });

    firebase.auth().onAuthStateChanged( (user) => {
      if(user){
        this.setState({loggedIn:true})
      }
      else{
        this.setState({loggedIn:false})
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn){
      case true:
        return (
          <View style={{flex:1}}>
            <Header headerText='Search for a Book'>
              <Button onPress={() => firebase.auth().signOut()} style={styles.logoutStyle}>
                Log Out
              </Button> 
            </Header>
            <BookList/>
            <Footer/> 
          </View> 
        );  
      case false:
        return(
          <View style={{flex:1}}>
            <Header headerText='Login Screen'/>
            <LoginForm />
          </View>
        );
        
      default:
        return(
          <View style={{flex:1}}>
            <Spinner />
          </View>
        );

    }
  }


  render() {
    console.log(this.state);

    return (
      
      <View style={{flex:1}} >
        {this.renderContent()}
      </View>
    );
  }
};

const styles = {
  logoutStyle:{
    flex:1
  }
}


