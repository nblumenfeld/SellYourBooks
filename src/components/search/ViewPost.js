import React from 'React';
import { Text, View, Modal } from 'react-native';
import { CardSection,Button } from '../common'; 

const ViewPost = ({ book, visible, onDismiss, condition }) => {
    const {title, author, edition, price, picture, notes} = book;
    return (
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
        >
        <View style={styles.containerStyle}>
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
}

export { ViewPost };