import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FlatList, View } from 'react-native';
import { postsFetch } from '../../actions';
import Book from '../search/Book';
import { Footer } from '../common';

class EditYourPost extends Component {
    componentWillMount() {
        this.props.postsFetch();
        
    }

    componentWillReceiveProps(nextProps) {
    }
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList 
                data={this.props.edit}
                renderItem={({item}) => <Book book={item}/>}
                />
                <Footer/>
            </View>
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

const mapStateToProps = state => {
   const edit = _.map(state.edit, (val,uid) => {
    return {...val, uid};
   });

   return { edit };
};

export default connect(mapStateToProps, { postsFetch })(EditYourPost);


