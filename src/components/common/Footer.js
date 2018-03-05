import React from 'react';
import { Text, View } from 'react-native';
import Button from './Button';

const Footer = (props) => {
    return (
    <View style={styles.viewStyle}>
        <Button>
            Test1
        </Button>
        <Button>
            Test2
        </Button>
        <Button>
            Test3
        </Button>
        <Button>
            Test4
        </Button>
        
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