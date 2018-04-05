import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ListView } from 'react-native';
import { postsFetch } from '../../../actions';
import Book from '../../search/Book';

class EditYourPost extends Component {
    componentWillMount() {
        this.props.postsFetch();
        this.createDataSource(this.props);
        
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ edit }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(edit);
    }

    renderRow(book){
        return <Book book={book}/>
    }
    render() {
        return (
           <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
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

const mapStatToProps = state => {
   const edit = _.map(state.edit, (val,uid) => {
    return {...val, uid};
   });

   return { edit };
};

export default connect(mapStatToProps, { postsFetch })(EditYourPost);


