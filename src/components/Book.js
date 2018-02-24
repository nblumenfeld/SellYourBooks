import React from 'react';
import {Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const Book = (props) => {
    return (
        <Card>
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
                <Text>Test Section 2</Text>
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