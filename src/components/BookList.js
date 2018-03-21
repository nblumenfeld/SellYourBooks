import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Text, ScrollView, View} from 'react-native';
import Book from './Book';

class BookList extends Component {
    componentWillMount() {
        console.log('componentwillmount BookList')
    }

    renderItem(){
        //return a state mapping of the single items you want (ex a book)
        //don't forget to use the .map function to intantiate the loop
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.tableStyle}>
                {/* Reference the renderList method here to "loop" through the list and make it appear */}
                {/* should be styled as a list that has 2 columns and alot of rows*/}
                <View style={styles.rowStyle}>
                    <Book title={"card1"}/>
                    <Book title={"card2"}/>
                </View>
                <View style={styles.rowStyle}>
                    <Book/>
                    <Book/>
                </View>
                <View style={styles.rowStyle}>
                    <Book/>
                    <Book/>
                </View>
                <View style={styles.rowStyle}>
                    <Book/>
                    <Book/>
                </View>
                <View style={styles.rowStyle}>
                    <Book/>
                    <Book/>
                </View>
                <View style={styles.rowStyle}>
                    <Book/>
                    <Book/>
                </View>
            </ScrollView>
        );
    }
};

const styles = {
    rowStyle: {
        justifyContent:'space-around',
        flexDirection:'row',
        alignContent:'center',

    },
    tableStyle:{
        justifyContent:'center',
        flexDirection:'column'
    }
}

const mapStatToProps = state => {
    return {
        searchResults: state.searchResults
    }
};

export default connect(mapStatToProps)(BookList);


