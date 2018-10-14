import React, { Component } from 'react';
import {
  Content, Card, Item, Input, Button, Text, Toast,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewDeckRequest } from '../actions/decksActions';

class NewDeckScreen extends Component {
  static propTypes = {
    addNewDeckRequest: PropTypes.func.isRequired,
  };

  state = { title: '' };

  onChangeTextHandler = title => this.setState(() => ({ title }));

  onPressHandler = () => {
    this.setState(() => ({ title: '' }));
    this.props.addNewDeckRequest(this.state.title);
    Toast.show({
      text: 'You have successfully created a New Deck.',
      duration: 3000,
      buttonText: 'OK',
    });
  };

  render() {
    const { title } = this.state;
    const { card, inputField } = styles;

    return (
      <Content padder>
        <Card style={card}>
          <Item rounded style={inputField}>
            <Input
              placeholder="What is the title of your new deck?"
              value={title}
              onChangeText={this.onChangeTextHandler}
              autoCorrect={false}
              autoFocus
            />
          </Item>
          <Button block danger rounded onPress={this.onPressHandler} disabled={!title}>
            <Text>Create Deck</Text>
          </Button>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  card: { padding: 20 },
  inputField: { marginBottom: 10 },
});

export default connect(
  null,
  { addNewDeckRequest },
)(NewDeckScreen);
