import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class RegisterForm extends Component {
    render() {
        return(
            <Card>
                {/*
                
                All the code beneath this needs to be
                connected to a register state that will
                then be submitted to the database and 
                authentication upon completion by 
                a 'Register' button
                
                */}
                {/* <CardSection>
                    <Input
                        label='First Name'
                        placeholder='John'
                        onChangeText={this.onfirst}
                    />
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                <CardSection>
                </CardSection>
                <CardSection>
                </CardSection> */}
            </Card>
        )
    }
}

export default RegisterForm;