import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FlatList } from 'react-native';
import { postsFetch } from '../../actions';
import Book from '../search/Book';

class EditYourPost extends Component {
    componentWillMount() {
        this.props.postsFetch();
        
    }

    componentWillReceiveProps(nextProps) {
    }
    render() {
        return (
            <FlatList 
            data={this.props.edit}
            renderItem={({item}) => <Book book={item}
            
            />}
        />
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


