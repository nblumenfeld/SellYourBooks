import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Footer } from '../common';
import { fetchUser, updateUser, userSave, logout, resetPassword } from '../../actions';


class AccountEditForm extends Component {

    componentWillMount(){
        this.props.fetchUser();
    }

    onSave(){
        const { email, password, firstName,lastName, error } = this.props;
        
        this.props.userSave({email,password,firstName,lastName});
    }

    renderError(){
        if(this.props.error != ''){
            return(
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            )
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                <Card>
                    <CardSection>
                        <Input
                        label="Email:"
                        value={this.props.email}
                        onChangeText={value => this.props.updateUser({prop:'email',value})}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                        label="First Name:"
                        value={this.props.firstName}
                        onChangeText={value => this.props.updateUser({prop:'firstName',value})}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                        label="Last Name:"
                        value={this.props.lastName}
                        onChangeText={value => this.props.updateUser({prop:'lastName',value})}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderError()}
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onSave.bind(this)}>Save Changes</Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => this.props.resetPassword()}>Reset Password</Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={()=> this.props.logout()}>Logout</Button>
                    </CardSection>
                </Card>
                </View>
                <Footer/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, password, firstName,lastName, error } = state.account;

    return { email, password, firstName,lastName, error };
}

const styles = {
    errorTextStyle: {
        fontSize:20,
        alignSelf:'center',
        color: 'red' 
    }
};

export default connect(mapStateToProps,{
    fetchUser, 
    updateUser,
    userSave,
    logout,
    resetPassword
})(AccountEditForm)