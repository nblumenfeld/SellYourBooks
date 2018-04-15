import React from 'React';
import { Text, ScrollView, Modal, Image } from 'react-native';
import { CardSection,Button } from '../common'; 

const ViewPost = ({ book, visible, onDismiss, condition, onContact, picture }) => {
    const {title, author, edition, price, notes, email, courseId} = book;
    
    return (
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
        >
        <ScrollView style={styles.containerStyle}>
        
            <CardSection style={styles.cardSectionStyle}>
                {picture}
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>Title: {title}</Text>
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>Author: {author}</Text>
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>Edition: {edition}</Text>
            </CardSection>
            
            <CardSection>
            <Text style={styles.textStyle}>Condition: {condition}</Text>
            </CardSection>

            <CardSection>
            <Text style={styles.textStyle}>Course ID: {courseId}</Text>
            </CardSection>
            
            <CardSection>
                <Text style={styles.textStyle}>Price: ${price}</Text>
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>Notes: {notes}</Text>
            </CardSection>

            <CardSection>
                <Button onPress={onContact}>
                    Contact Seller!
                </Button>
            </CardSection>

            <CardSection>
                <Button onPress={onDismiss}>Dismiss</Button>
            </CardSection>
        </ScrollView>
    </Modal>
    );
};

const styles={
    containerStyle:{
        backgroundColor:'rgba(0, 0, 0, 0.75)',
        position:'relative',
        flex:1
    },
    textStyle:{
        flex:1,
        fontSize:15,
        textAlign:'center',
        lineHeight:40,
        color:'#2E86AB',
        fontWeight:'bold'
    },
    cardSectionStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
}

export { ViewPost };