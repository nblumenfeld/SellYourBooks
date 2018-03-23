import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { bookUpdate } from '../../actions';
// import { Card, CardSection, Input} from '../common';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Input from '../common/Input';
import Button from '../common/Button';

class Post extends Component {
    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Title"
                        placeholder="title"
                        value={this.props.title}
                        onChangeText={value => this.props.bookUpdate({prop:'title',value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Author"
                        placeholder="author"
                        value={this.props.author}
                        onChangeText={value => this.props.bookUpdate({prop:'author',value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Edition"
                        placeholder="edition"
                        value={this.props.edition}
                        onChangeText={value => this.props.bookUpdate({prop:'edition',value})}
                    />
                </CardSection>
                
                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.picketTextStyle}>Condition</Text>
                    <Picker
                        selectedValue={this.props.condition}
                        onValueChange={value => this.props.bookUpdate({prop:'condition', value})}
                        style={{flex:1}}
                    >
                        <Picker.Item label="Excellent" value="E"/>
                        <Picker.Item label="Good" value="G"/>
                        <Picker.Item label="OK" value="O"/>
                        <Picker.Item label="Poor" value="P"/>
                    </Picker>
                </CardSection>
                
                <CardSection>
                    <Input
                        label="Price"
                        placeholder="$$$$"
                        value={this.props.price}
                        onChangeText={value => this.props.bookUpdate({prop:'price',value})}
                    />
                </CardSection>
                

                <CardSection>
                    <Input
                        label="Notes"
                        placeholder="(optional)"
                        value={this.props.notes}
                        onChangeText={value => this.props.bookUpdate({prop:'notes',value})}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Post!
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    picketTextStyle: {
        fontSize:18,
        paddingLeft:20
    }
}

const mapStateToProps = (state) => {
    const { title, author, edition, condition, price, picture, notes } = state.post;

    return { title, author, edition, condition, price, picture, notes };

};

export default connect(mapStateToProps,{ bookUpdate })(Post);

