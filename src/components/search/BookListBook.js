import React, { Component } from 'react';
import Communications from 'react-native-communications';
import {Text, Image} from 'react-native';
import { Card, CardSection, Button  } from '../common';
import { Actions } from 'react-native-router-flux';
import { ViewPost } from './ViewPost';


class BookListBook extends Component {

    state = {showModal:false, actualCondition:''};

    componentWillMount(){
        this.setCondition();
    }

    setCondition(){
        switch(this.props.book.condition){
            case 'E':
                this.setState({actualCondition:'Excellent'});
                break;
            case 'G':
                this.setState({actualCondition:'Good'});
                break;
            case 'O':
                this.setState({actualCondition:'Ok'});
                break;
            case 'P':
                this.setState({actualCondition:'Poor'});
                break;
        }
    }

    onBookPress() {
        this.setState({showModal:true});
    }

    onDismiss(){
        this.setState({showModal:false})
    }

    onContact(){
        const { title } = this.props.book;
        Communications.email([this.props.book.email],null,null,`I am interested in ${title}`,null)
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
        console.log(this.props.book.picture);
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
               <Button onPress={this.onBookPress.bind(this)}>View Book</Button>
            </CardSection>
            <ViewPost
                book={this.props.book}
                visible={this.state.showModal}
                condition={this.state.actualCondition}
                onContact={this.onContact.bind(this)}
                onDismiss={this.onDismiss.bind(this)}
                picture={this.renderBook()}
            />
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
export default BookListBook;