import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookUpdate, bookCreate } from '../../actions';
import { Card, CardSection, Button} from '../common';
import PostForm from './PostForm';

class Post extends Component {

    onButtonPress() {
        const { title, author, edition, condition, price, picture, notes } = this.props;

        this.props.bookCreate({ title, author, edition, condition: condition || 'E' , price, picture, notes });
    }

    render () {
        return (
            <Card>
                <PostForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Post!
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { title, author, edition, condition, price, picture, notes } = state.post;

    return { title, author, edition, condition, price, picture, notes };

};

export default connect(mapStateToProps,{ bookUpdate, bookCreate })(Post);

