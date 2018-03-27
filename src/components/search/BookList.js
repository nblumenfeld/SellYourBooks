import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ListView } from 'react-native';
import { booksFetch } from '../../actions';
import Book from './Book';

class BookList extends Component {
    componentWillMount() {
        this.props.booksFetch();
        this.createDataSource(this.props);
        
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ search }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(search);
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
   const search = _.map(state.search, (val,uid) => {
    return {...val, uid};
   });

   return { search };
};

export default connect(mapStatToProps, { booksFetch })(BookList);


