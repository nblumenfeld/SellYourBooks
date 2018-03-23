import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import firebase from 'firebase';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Input from '../common/Input';
import Spinner from '../common/Spinner';
import Button from '../common/Button';

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(password){
        this.props.passwordChanged(password);
    }

    onButtonPress() {
        const {email,password } = this.props;

        this.props.loginUser({email,password});
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
    
    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
        );
    }

    render() {
        return(
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

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
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


export default connect(mapStateToProps, { emailChanged,passwordChanged, loginUser })(LoginForm);






    // class LoginForm extends Component {
    //     constructor(props) {
    //         super(props);
    //       }
    
    //     state={email:'', password:'', error:'', loading: false };
    
    //     onButtonPress() {
    //         const {email,password,error,loading} = this.state;
    
    //         this.setState({error:'',loading:true});
    
    //         firebase.auth().signInWithEmailAndPassword(email,password)
    //             .then(this.onLoginSuccess.bind(this))
    //             .catch( () => {
    //                 firebase.auth().createUserWithEmailAndPassword(email,password)
    //                     .then(this.onLoginSuccess.bind(this))
    //                     .catch(this.onLoginFail.bind(this) );
    //             }); 
    //     }
    
    //     onLoginFail() {
    //         this.setState({
    //             error: 'Authentication failed.',
    //             loading:false
    //         });
    //     }
    
    //     onLoginSuccess() {
    //         this.setState({
    //             email:'',
    //             password:'',
    //             loading:false,
    //             error:'',
    
    //         })
    //     }
    
    //     renderButton() {
    //         if(this.state.loading){
    //             return <Spinner size='small'/>
    //         }
            
    //         return( 
    //             <Button onPress={this.onButtonPress.bind(this)}>
    //                 Log In
    //             </Button>
    //             );
    //     }
          
    //     render() {
    //         return ( 
    //             <Card>
    //                 <CardSection>
    //                     <Input
    //                     label='Email'
    //                     placeholder='user@gmail.com'
    //                     autoCorrect={false}
    //                     value={this.state.email}
    //                     onChangeText={email => this.setState({email})} 
    //                     />
    //                 </CardSection>
    //                 <CardSection>
    //                     <Input
    //                     label='Password'
    //                     secureTextEntry={true}
    //                     placeholder='password'
    //                     autoCorrect={false}
    //                     value={this.state.password}
    //                     onChangeText={password => this.setState({password})}
    //                     />
    //                 </CardSection>
    
    //                 <Text style={styles.errorTextStyle}>
    //                     {this.state.error}
    //                 </Text>
    
    //                 <CardSection>
    //                     {this.renderButton()}        
    //                 </CardSection>
    //             </Card>
    //         );
    //     }
    // }
    