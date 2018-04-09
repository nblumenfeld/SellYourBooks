import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ListView, View, Text, Modal, Picker } from 'react-native';
import { booksFetch } from '../../actions';
import BookListBook from './BookListBook';
import ChooseSearch from './ChooseSearch';
import { Input, Button, CardSection } from '../common';

class BookList extends Component {
    state = { search:'', type:'title',showModal:false }
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
        this.props.booksFetch({search:this.state.search, type:this.state.type});
        this.createDataSource(this.props);
    }

    pickSearchType(){
        this.setState({showModal:true});
        console.log(this.state.showModal);
    }

    onDismiss(){
        this.setState({showModal:false});
    }

    renderType(){
        switch(this.state.type){
            case 'title':
                return 'Title';
            case 'author':
                return 'Author';
            case 'courseId':
                return 'Course ID';
        }
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Text style={{fontSize:18, flex:.5}}>Search Type:</Text>
                    <Button onPress={this.pickSearchType.bind(this)}>{this.renderType()}</Button>
                </CardSection>
                <CardSection>
                    <Input
                    placeholder="search"
                    value={this.state.search}
                    onChangeText={search => this.setState({search})}
                    />
                    <Button onPress={this.onSearch.bind(this)}>
                        Search
                    </Button>
                </CardSection>
                <Modal
                    visible={this.state.showModal}
                    transparent
                    animationType="slide"
                    onRequestClose={()=>{}}
                    >
                    <View style={styles.containerStyle}>
                        <CardSection>
                            <Picker
                                selectedValue={this.state.type}
                                onValueChange={value => this.setState({type:value})}
                                style={{flex:1}}
                                >
                                <Picker.Item label="Title" value="title"/>
                                <Picker.Item label="Author" value="author"/>
                                <Picker.Item label="Course ID" value="courseId"/>
                            </Picker>
                        </CardSection>
                        <CardSection>
                            <Button onPress={this.onDismiss.bind(this)}>Dismiss</Button>
                        </CardSection>
                    </View>
                </Modal>
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
    },
    containerStyle:{
        backgroundColor:'rgba(0, 0, 0, 0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'
    }
}

const mapStatToProps = state => {
   const search = _.map(state.search, (val,uid) => {
    return {...val, uid};
   });

   return { search };
};

export default connect(mapStatToProps, { booksFetch })(BookList);


