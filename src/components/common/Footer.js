import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Footer = (props) => {
    return (
    <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>Actions.main()}>
            <Text style={styles.textStyle}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>Actions.edit()}>
            <Text style={styles.textStyle}>Edit Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>Actions.account()}>
            <Text style={styles.textStyle}>Account</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles ={
    viewStyle:{
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems: 'center',
        height:60,
        bottom:0,
        paddingTop:5,
        paddingBottom:5,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        position: 'relative'

    },
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
export { Footer };