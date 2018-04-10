import React, { Component } from 'react';
import {Text, Image} from 'react-native';
import { Card, CardSection, Button  } from '../common';
import { Actions } from 'react-native-router-flux';


class Book extends Component {

    onBookPress() {
        Actions.postEdit({ book:this.props.book });
    }

    render() {
        const { title } = this.props.book;
        return (
            <Card >
            <CardSection>
                <Image 
                style={styles.thumbnailStyle}
                source={{uri:this.props.picture}}
                />
            </CardSection>
            <CardSection>
                <Text>
                    {title}
                </Text>
            </CardSection>
            <CardSection>
               <Button onPress={this.onBookPress.bind(this)}>View Book</Button>
            </CardSection>
        </Card>
    );
}
}

const styles = {
    thumbnailStyle:{
        width:100,
        height:100
    }
}
export default Book;