import React from 'react';
import { 
    View,
    TextInput,
    Text
} from 'react-native';

const Input = ({ label, value, onChangeText, autoCorrect, placeholder, secureTextEntry, style }) => {
    return(
        <View style={[styles.containerStyle, style]}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            placeholder={placeholder}
            style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText} 
            />
        </View>
    ); 
};

const styles = {
    inputStyle:{
        color: '#000',
        paddingRight: 5, 
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        color:'#2E86AB',
        fontWeight:'bold'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        color:'#2E86AB',
        fontWeight:'bold'

    },
    containerStyle: {
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems: 'center'
    }
};

export { Input };