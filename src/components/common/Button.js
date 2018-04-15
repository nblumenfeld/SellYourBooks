import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ( {text, onPress, children} ) => {
    return(
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles ={
    textStyle:{
        alignSelf:'center',
        color:'#2E86AB',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
        fontWeight:'bold'
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#2E86AB',
        marginLeft:5,
        marginRight:5
    }
}

export { Button };