import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, Picker, Image } from 'react-native';
import { connect } from 'react-redux';
import { bookUpdate } from '../../actions';
import CameraComponent from './Camera';
import { CardSection, Input, Button, Card } from '../common';
import { Actions } from 'react-native-router-flux';

class PostForm extends Component {

    maybeRenderImage() {
        if(this.props.picture != ''){
            return(
                <CardSection style={styles.cardSectionStyle}>
                    <Image
                    style={styles.thumbnailStyle} 
                    source={{uri:this.props.picture}}/>
                </CardSection>
            )
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
            behavior="padding"
            >
                <CardSection>
                    <Input
                        label="Title"
                        placeholder="title"
                        value={this.props.title}
                        onChangeText={value => this.props.bookUpdate({ prop: 'title', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Author"
                        placeholder="author"
                        value={this.props.author}
                        onChangeText={value => this.props.bookUpdate({ prop: 'author', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Edition"
                        placeholder="edition"
                        value={this.props.edition}
                        onChangeText={value => this.props.bookUpdate({ prop: 'edition', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Course ID"
                        placeholder="Course ID"
                        value={this.props.courseId}
                        onChangeText={value => this.props.bookUpdate({ prop: 'courseId', value })}
                    />
                </CardSection>

                <CardSection>
                    <Text style={{flex:1, fontSize:18, paddingLeft:20, color:'#2E86AB'}}>Picture</Text>
                    <Button onPress={() => Actions.takePicture()}>Take a picture</Button>
                </CardSection>

                {this.maybeRenderImage()}

                <CardSection>
                    <Text style={styles.pickerTextStyle}>Condition</Text>
                    <Picker
                        selectedValue={this.props.condition}
                        onValueChange={value => this.props.bookUpdate({ prop: 'condition', value })}
                        style={{ flex: 1 }}
                    >
                        <Picker.Item label="Excellent" value="E" />
                        <Picker.Item label="Good" value="G" />
                        <Picker.Item label="Okay" value="O" />
                        <Picker.Item label="Poor" value="P" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Input
                        label="Price"
                        placeholder="$$$$"
                        value={this.props.price}
                        onChangeText={value => this.props.bookUpdate({ prop: 'price', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Notes"
                        placeholder="(optional)"
                        value={this.props.notes}
                        onChangeText={value => this.props.bookUpdate({ prop: 'notes', value })}
                    />
                </CardSection>
            </KeyboardAvoidingView>

        )
    }
}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        color:'#2E86AB',
        fontWeight:'bold'
    },
    thumbnailStyle:{
        width:300,
        height:300
    },
    cardSectionStyle:{
        flex:1,
        justifyContent:'center'
    }
}

const mapStateToProps = (state) => {
    const { title, author, edition, courseId, condition, price, picture, notes } = state.post;

    return { title, author, edition, courseId, condition, price, picture, notes };

};

export default connect(mapStateToProps, { bookUpdate })(PostForm);