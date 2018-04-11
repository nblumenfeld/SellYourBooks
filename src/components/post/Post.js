import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bookInitialize, bookUpdate, bookCreate } from '../../actions';
import { Card, CardSection, Button} from '../common';
import PostForm from './PostForm';

class Post extends Component {

    componentWillMount(){
        console.log('component will  mount')
        this.props.bookInitialize();
    }

    onButtonPress() {
        const { title, author, edition, courseId, condition, price, picture, notes } = this.props;

        this.props.bookCreate({ title, author, edition, courseId, condition: condition || 'E' , price, picture, notes });
    }

    render () {
        return (
            <ScrollView style={{flex:1}}>
            <Card>
                <PostForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Post!
                    </Button>
                </CardSection>
            </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    const { title, author, edition,courseId, condition, price, picture, notes } = state.post;

    return { title, author, edition,courseId, condition, price, picture, notes };

};

export default connect(mapStateToProps,{ bookUpdate, bookCreate, bookInitialize })(Post);

