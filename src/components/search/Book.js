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
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/senior-project-93b55.appspot.com/o/images%2Fbook.png?alt=media&token=18f2958a-4874-46a6-b3e7-dd169b4a0002'}}
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
                <Text style={{color:'#2E86AB', fontWeight:'bold'}}>
                    Title: {title}
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
        width:300,
        height:300
    },
    cardSectionStyle:{
        flex:1,
        justifyContent:'center'
    }
}
export default Book;