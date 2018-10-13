import React, { Component } from 'react';
import {
  Content, Card, Item, Input, Button, Text, Toast,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewCardRequest } from '../actions/decksActions';

class AddCardScreen extends Component {
  static propTypes = {
    addNewCardRequest: PropTypes.func.isRequired,
    deckId: PropTypes.string.isRequired,
  };

  state = { question: '', answer: '' };

  questionInputHandler = question => this.setState(() => ({ question }));

  answerInputHandler = answer => this.setState(() => ({ answer }));

  onPressHandler = () => {
    const { deckId, addNewCardRequest } = this.props;

    this.setState(() => ({ question: '', answer: '' }));
    addNewCardRequest(this.state, deckId);

    Toast.show({
      text: 'You have successfully added a New Card.',
      duration: 3000,
    });
  };

  render() {
    const { question, answer } = this.state;
    const { card, inputField } = styles;

    return (
      <Content padder>
        <Card style={card}>
          <Item rounded style={inputField}>
            <Input
              placeholder="Question here..."
              value={question}
              onChangeText={this.questionInputHandler}
              autoCorrect={false}
              autoFocus
            />
          </Item>

          <Item rounded style={inputField}>
            <Input
              placeholder="Answer here..."
              value={answer}
              onChangeText={this.answerInputHandler}
              autoCorrect={false}
            />
          </Item>

          <Button
            block
            danger
            rounded
            onPress={this.onPressHandler}
            disabled={!question || !answer}
          >
            <Text>Add Card</Text>
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

const mapStateToProps = (state, { navigation }) => ({
  deckId: navigation.state.params.deckId,
});

export default connect(
  mapStateToProps,
  { addNewCardRequest },
)(AddCardScreen);
