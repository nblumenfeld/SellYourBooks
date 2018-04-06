import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ListView, View } from 'react-native';
import { booksFetch } from '../../actions';
import BookListBook from './BookListBook';
import { Input, Button, CardSection } from '../common';

class BookList extends Component {
    state = { search:'' }
    componentWillMount() {
        this.props.booksFetch({search:this.state.search});
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
        return <BookListBook book={book}/>
    }

    onSearch() {
        this.props.booksFetch({search:this.state.search});
        this.createDataSource(this.props);
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                    placeholder="Title"
                    value={this.state.search}
                    onChangeText={search => this.setState({search})}
                    />
                    <Button onPress={this.onSearch.bind(this)}>
                        Search
                    </Button>
                </CardSection>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
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

const mapStatToProps = state => {
   const search = _.map(state.search, (val,uid) => {
    return {...val, uid};
   });

   return { search };
};

export default connect(mapStatToProps, { booksFetch })(BookList);


