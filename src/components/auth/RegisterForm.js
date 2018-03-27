import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { updateRegistrationForm, registerUser } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class RegisterForm extends Component {

    onButtonPressRegister(){
        const {email,password,firstName,lastName,school,loading} = this.props;
        this.props.registerUser({ email, password, firstName, lastName, school } || { email, password, firstName, lastName, school:'Westminster' } );
    }

    renderRegisterButton() {
        if(this.props.loading) {
            return <Spinner size="large" />;
        }
        return(
            <Button onPress={this.onButtonPressRegister.bind(this)} >
                Register
            </Button>
        );
    }

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
                <CardSection>
                    <Input
                        label='First Name'
                        placeholder='John'
                        value={this.props.firstName}
                        onChangeText={value => this.props.updateRegistrationForm({prop:'firstName',value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Last Name'
                        placeholder='Doe'
                        value={this.props.lastName}
                        onChangeText={value => this.props.updateRegistrationForm({prop:'lastName',value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        value={this.props.email}
                        onChangeText={value => this.props.updateRegistrationForm({prop:'email',value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        value={this.props.password}
                        onChangeText={value => this.props.updateRegistrationForm({prop:'password',value})}
                    />
                </CardSection>

                <CardSection>
                    <Picker
                        selectedValue={this.props.school}
                        onValueChange={value => this.props.updateRegistrationForm({prop:'school', value})}
                        style={{flex:1}}
                        >
                        <Picker.Item label="Westminster" value="Westminster"/>
                        <Picker.Item label="University of Utah" value="UniversityOfUtah"/>
                        <Picker.Item label="UCSB" value="UCSantaBarbara"/>
                        <Picker.Item label="Cornell" value="Cornell"/>
                    </Picker>
                </CardSection>
                
                <CardSection>
                    {this.renderRegisterButton()}
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { email, password, firstName, lastName, school, loading } = state.register;

    return { email, password, firstName, lastName, school, loading };
}

export default connect(mapStateToProps, { updateRegistrationForm, registerUser } )(RegisterForm);