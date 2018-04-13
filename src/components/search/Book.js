import React, { Component } from 'react';
import {Text, Image} from 'react-native';
import { Card, CardSection, Button  } from '../common';
import { Actions } from 'react-native-router-flux';


class Book extends Component {

    onBookPress() {
        Actions.postEdit({ book:this.props.book });
    }
    renderBook(){
        if(this.props.book.picture == 'default'){
            return (
            <Image 
            style={styles.thumbnailStyle}
            source={require('../../assets/book.png')}
            />
            )
        }
        else{
            return(
            <Image 
            style={styles.thumbnailStyle}
            source={{uri:this.props.book.picture}}
            />
            )
        }
    }

    render() {
        const { title } = this.props.book;
        return (
            <Card >
            <CardSection style={styles.cardSectionStyle}>
               {this.renderBook()}
            </CardSection>
            <CardSection>
                <Text>
                    {title}
                </Text>
            </CardSection>
            <CardSection>
               <Button onPress={this.onBookPress.bind(this)}>Edit Book</Button>
            </CardSection>
        </Card>
    );
}
}

const styles = {
    thumbnailStyle:{
        width:150,
        height:150
    },
    cardSectionStyle:{
        flex:1,
        justifyContent:'center'
    }
}
export default Book;