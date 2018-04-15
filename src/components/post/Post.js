import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bookInitialize, bookUpdate, bookCreate } from '../../actions';
import { Card, CardSection, Button, Spinner} from '../common';
import PostForm from './PostForm';

class Post extends Component {

    componentWillMount(){
        this.props.bookInitialize();
    }

    onButtonPress() {
        const { title, author, edition, courseId, condition, price, picture, notes } = this.props;

        this.props.bookCreate({ title, author, edition, courseId, condition: condition || 'E' , price, picture, notes });
    }

    renderButton() {
        if(this.props.loading) {
            return(
                <CardSection>
                    <Spinner size="large" />
                </CardSection>
            ) 
        }

        return (
            <CardSection>
                <Button 
                onPress={this.onButtonPress.bind(this)} >
                    Post!
                </Button>
            </CardSection>
        );
    }

    render () {
        return (
            <ScrollView style={{flex:1}}>
            <Card>
                <PostForm {...this.props} />
                {this.renderButton()}
            </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    const { title, author, edition,courseId, condition, price, picture, notes, loading } = state.post;

    return { title, author, edition,courseId, condition, price, picture, notes, loading };

};

export default connect(mapStateToProps,{ bookUpdate, bookCreate, bookInitialize })(Post);

