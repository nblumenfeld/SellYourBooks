import React from 'react';
import { Text, View, Button } from 'react-native';

const Footer = (props) => {
    return (
    <View style={styles.viewStyle}>
        <Button title="Test1"/>
        <Button title="Test2"/>
        <Button title="Test3"/>
        <Button title="Test4"/>
    </View>
    );
};

const styles ={
    viewStyle:{
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems: 'center',
        height:60,
        paddingBottom:15,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        position: 'relative'

    },
    textStyle: {
        fontSize:20
    }
}
export default Footer;