import React, { Component } from 'react';
import { 
    Platform,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View
} from 'react-native';

class LoginForm extends Component {
    constructor(props) {
        super(props);
      }

      onButtonClick(){
        console.log('button pressed');
      }
      
    render() {
        return (
            <View>
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
                        onPress={this.onButtonClick()}
                    />
                </View>

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

export default LoginForm;