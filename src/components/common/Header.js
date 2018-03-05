import React from 'react';
import { Text, View } from 'react-native';
import Button from './Button';

const Header = ({headerText, children}) => {
    return (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> {headerText} </Text>
        {children}
    </View>
    );
};

const styles ={
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset: { width:0, height: 2},
        shadowOpacity: 0.2,
        position: 'relative',
        flexDirection:'row',
        alignItems:'center'

    },
    textStyle: {
        fontSize:20
    }
}
export default Header;