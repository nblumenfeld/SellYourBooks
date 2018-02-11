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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = { text: 'Enter Your Email', password: 'Enter Your Password' };
  }

  render() {
    return (
      <View style={styles.container}>

        


        <View>
        <TextInput
          style={{height: 40, borderColor:'black', borderWidth: 1, borderRadius: 10, textAlign: 'center',width: 200}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <View>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <View>
          <Button
            title="Submit"
            style={styles.button}
          />
        </View>
        {/* <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text> */}
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
  },
  button:{
    backgroundColor:'#ffffff',
    borderRadius:10
  },
  textInput: {
    height: 40,
    borderColor:'black',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    width: 200
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

