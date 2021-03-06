import React, {Component}from 'react';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { 
    emailChanged, 
    passwordChanged, 
    loginUser, 
    navigateToRegister 
} from '../../actions';
import { 
    Card,
    CardSection,
    Input,
    Button, 
    Spinner 
} from '../common';

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(password){
        this.props.passwordChanged(password);
    }

    onButtonPressLogin() {
        const {email,password } = this.props;
        this.props.loginUser({email,password});
    }

    onButtonPressRegister() {
        Actions.register();
    }

    renderError(){
        if(this.props.error) {
            return (
                <View style={{backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButtons() {
        if(this.props.loading) {
            return(
                <CardSection>
                    <Spinner size="large" />
                </CardSection>
            ) 
        }

        return (
            <CardSection>
                <Button onPress={this.onButtonPressLogin.bind(this)} >
                    Login
                </Button>
                <Button onPress={this.onButtonPressRegister.bind(this)} >
                    Register
                </Button>
            </CardSection>
        );
    }

    render() {
        return(
            <View style={{flex:1}}> 
            <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/senior-project-93b55.appspot.com/o/images%2FLogo.jpg?alt=media&token=a280a5e8-8d62-4281-9eaf-73ab1ba325a1'}} style={{height:200, width:200}}/>
            </View>
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                
                {this.renderError()}
                {this.renderButtons()}
            </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize:20,
        alignSelf:'center',
        color: 'red' 
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email: email,
        password: password,
        error: error,
        loading: loading
    };
};


export default connect(mapStateToProps, 
    { 
    emailChanged, 
    passwordChanged, 
    loginUser 
})(LoginForm);
