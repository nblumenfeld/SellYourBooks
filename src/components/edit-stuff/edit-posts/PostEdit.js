import _ from 'lodash';
import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import { connect } from 'react-redux';
import PostForm from '../../post/PostForm';
import { bookUpdate, bookSave, bookDelete } from '../../../actions';
import { Card, CardSection, Button, Confirm } from '../../common';

class PostEdit extends Component{

    state = { showModal:false };

    componentWillMount() {
        _.each(this.props.book, (value, prop) => {
            this.props.bookUpdate({prop,value});
        })
    }

    onButtonPress(){
        const {title, author, edition, courseId, condition, price, picture, notes } = this.props;

        console.log(this.props.book.comRefId);

        this.props.bookSave({ title, author, edition, courseId, condition, price, picture, notes, communalPostId:this.props.book.comRefId, refId: this.props.book.uid });
    }

    onAccept() {
        const { uid, comRefId } = this.props.book;
        this.props.bookDelete({comRefId, uid});
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render () {
        return (
            <ScrollView style={{flex:1}}>
            <Card>
                <PostForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Delete
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this post?
                </Confirm>
            </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    const { title, author, edition, courseId, condition, price, picture, notes } = state.post;

    return { title, author, edition, courseId, condition, price, picture, notes };
}

export default connect(mapStateToProps, {bookUpdate, bookSave, bookDelete})(PostEdit);