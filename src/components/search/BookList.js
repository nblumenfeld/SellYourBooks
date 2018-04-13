import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text, Modal, Picker } from 'react-native';
import { booksFetch } from '../../actions';
import BookListBook from './BookListBook';
import ChooseSearch from './ChooseSearch';
import { Input, Button, CardSection } from '../common';

class BookList extends Component {
    state = { search:'', type: 'title', showModal: false }
    componentWillMount() {
        this.props.booksFetch({ search:'', type:'title'});
    }

    componentWillReceiveProps(nextProps) {
    }

    renderRow(book) {
        return <BookListBook book={book} />
    }

    pickSearchType() {
        this.setState({ showModal: true });
    }

    onDismiss() {
        this.setState({ showModal: false });
    }

    renderType() {
        switch (this.state.type) {
            case 'title':
                return 'By: Title';
            case 'author':
                return 'By: Author';
            case 'courseId':
                return 'By: Course ID';
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <CardSection>
                    <Input
                        style={{ flex: 2.5 }}
                        placeholder="search"
                        value={this.state.search}
                        onChangeText={search => {
                            this.setState({search});
                            if (search != undefined){
                                console.log('Searching for' + this.state.search);
                                this.props.booksFetch({ search: search, type: this.state.type });
                            }
                        }}
                    />
                    <Button onPress={this.pickSearchType.bind(this)}>{this.renderType()}</Button>
                </CardSection>
                <FlatList 
                    style={{flex:1}}
                    data={this.props.searchResults}
                    renderItem={({item}) => <BookListBook book={item}
                    />}
                />
                <Modal
                    visible={this.state.showModal}
                    transparent
                    animationType="slide"
                    onRequestClose={() => { }}
                >
                    <View style={styles.containerStyle}>
                        <CardSection>
                            <Picker
                                selectedValue={this.state.type}
                                onValueChange={value => this.setState({ type: value })}
                                style={{ flex: 1 }}
                            >
                                <Picker.Item label="Title" value="title" />
                                <Picker.Item label="Author" value="author" />
                                <Picker.Item label="Course ID" value="courseId" />
                            </Picker>
                        </CardSection>
                        <CardSection>
                            <Button onPress={this.onDismiss.bind(this)}>Dismiss</Button>
                        </CardSection>
                    </View>
                </Modal>
            </View>

        );
    }
};

const styles = {
    rowStyle: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignContent: 'center',

    },
    tableStyle: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

const mapStatToProps = state => {
    const searchResults = _.map(state.searchRed, (val, uid) => {
        return { ...val, uid };
    });
    console.log('mapStateToProps');
    console.log(searchResults);

    return { searchResults };
};

export default connect(mapStatToProps, { booksFetch })(BookList);


