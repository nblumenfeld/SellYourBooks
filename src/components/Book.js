import React from 'react';
import {Text, Image} from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';


const Book = (props) => {
    return (
        //the on press function should make a popup that presents the user with more info on the specific book
        //this wont' be worked on until I am pulling data from the database
        <Card >
            <CardSection>
                <Image 
                style={styles.thumbnailStyle}
                source={require('../assets/book.png')}
                />
            </CardSection>
            <CardSection>
                <Text>Test Section 1</Text>
            </CardSection>
            <CardSection>
               <Button onPress={() => console.log("Pressed " + props.title)}>View Book</Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    thumbnailStyle:{
        width:100,
        height:100
    }
}
export default Book;