import React from 'React';
import { Text, View, Modal, Image } from 'react-native';
import { CardSection,Button } from '../common'; 

const ViewPost = ({ book, visible, onDismiss, condition, onContact, picture }) => {
    const {title, author, edition, price, notes, email} = book;
    
    return (
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
        >
        <View style={styles.containerStyle}>

            <CardSection style={styles.cardSectionStyle}>
                {picture}
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>{title}</Text>
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>{author}</Text>
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>{edition}</Text>
            </CardSection>
            
            <CardSection>
            <Text style={styles.textStyle}>{condition}</Text>
            </CardSection>
            
            <CardSection>
                <Text style={styles.textStyle}>{price}</Text>
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>{notes}</Text>
            </CardSection>

            <CardSection>
                <Button onPress={onContact}>
                    Contact Seller!
                </Button>
            </CardSection>

            <CardSection>
                <Button onPress={onDismiss}>Dismiss</Button>
            </CardSection>
        </View>
    </Modal>
    );
}

styles={
    containerStyle:{
        backgroundColor:'rgba(0, 0, 0, 0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'
    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    thumbnailStyle:{
        width:150,
        height:150
    },
    cardSectionStyle:{
        flex:1,
        justifyContent:'center'
    }
}

export { ViewPost };