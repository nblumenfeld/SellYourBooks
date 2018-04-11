import React, { Component } from 'react';
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
        console.log('book pressed');
        this.setState({showModal:true});
    }

    onDismiss(){
        this.setState({showModal:false})
    }



    render() {
        const { title } = this.props.book;
        console.log(this.props.book.picture);
        return (
            <Card >
            <CardSection>
                <Image 
                style={styles.thumbnailStyle}
                source={{uri:this.props.book.picture}}
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
            <ViewPost
                book={this.props.book}
                visible={this.state.showModal}
                condition={this.state.actualCondition}
                onDismiss={this.onDismiss.bind(this)}
            />
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
export default BookListBook;