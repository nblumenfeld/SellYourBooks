import React from 'React';
import { Text, View, Modal } from 'react-native';
import { CardSection,Button } from '../common'; 

const ChooseSearch = ({ current, visible, onSelection, onDismiss }) => {
    return(
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
        >
            <View style={styles.containerStyle}>
                <CardSection>
                    <Picker
                        selectedValue={current}
                        onValueChange={onSelection}
                        style={{flex:1}}
                        >
                        <Picker.Item label="Title" value="title"/>
                        <Picker.Item label="Author" value="uthor"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={onDismiss}>Dismiss</Button>
                </CardSection>
            </View>
        </Modal>

    )

}

styles={
    containerStyle:{
        backgroundColor:'rgba(0, 0, 0, 0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'
    }
}

export { ChooseSearch };