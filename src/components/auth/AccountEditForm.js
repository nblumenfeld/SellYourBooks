import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input } from '../common';
import { fetchUser, updateUser } from '../../actions';


class AccountEditForm extends Component {

    componentWillMount(){
        this.props.fetchUser();
    }

    render() {
        return (
                <Card>
                    <CardSection>
                        <Input
                        label="Email"
                        value={this.props.email}
                        onChangeText={email => this.props.updateUser({email})}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                        label="Password"
                        value={this.props.password}
                        onChangeText={password => this.props.updateUser({password})}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                        label="First Name"
                        value={this.props.firstName}
                        onChangeText={firstName => this.props.updateUser({firstName})}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                        label="Last Name"
                        value={this.props.lastName}
                        onChangeText={lastName => this.props.updateUser({lastName})}
                        />
                    </CardSection>


                    <CardSection>
                        <Button>Save</Button>
                    </CardSection>
                    <CardSection>
                        <Button>Logout</Button>
                    </CardSection>
                </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, password, firstName,lastName, error } = state.auth;

    return { email, password, firstName,lastName, error };
}

export default connect(mapStateToProps,{fetchUser, updateUser})(AccountEditForm)