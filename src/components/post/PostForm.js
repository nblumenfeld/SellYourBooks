import React, { Component } from 'react';
import { View, Text, Picker, Image } from 'react-native';
import { connect } from 'react-redux';
import { bookUpdate } from '../../actions';
import CameraComponent from './Camera';
import { CardSection, Input, Button, Card } from '../common';
import { Actions } from 'react-native-router-flux';

class PostForm extends Component {

    maybeRenderImage() {
        console.log(this.props.picture)
        if(this.props.picture != ''){
            return(
                <CardSection>
                    <Image
                    style={styles.thumbnailStyle} 
                    source={{uri:this.props.picture}}/>
                </CardSection>
            )
        }
    }

    render() {
        return (
            <View>
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
                    <Text style={{flex:1, fontSize:18, paddingLeft:20}}>Picture</Text>
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
                        <Picker.Item label="OK" value="O" />
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
            </View>

        )
    }
}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    thumbnailStyle:{
        width:100,
        height:100
    }
}

const mapStateToProps = (state) => {
    const { title, author, edition, courseId, condition, price, picture, notes } = state.post;

    return { title, author, edition, courseId, condition, price, picture, notes };

};

export default connect(mapStateToProps, { bookUpdate })(PostForm);