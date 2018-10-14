import React, { Component } from 'react';
import {
  Content, Card, Item, Input, Button, Text, Toast, Icon,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { addNewCardRequest } from '../actions/decksActions';
import { GREY } from '../constants/colors';

class AddCardScreen extends Component {
  static propTypes = {
    addNewCardRequest: PropTypes.func.isRequired,
    deckId: PropTypes.string.isRequired,
    navigation: PropTypes.shape({}).isRequired,
  };

  state = {
    question: '',
    answer: '',
    yesAnswer: false,
    noAnswer: false,
  };

  questionInputHandler = question => this.setState(() => ({ question }));

  yesClickHandler = () => this.setState(() => ({ yesAnswer: true, noAnswer: false, answer: 'yes' }));

  noClickHandler = () => this.setState(() => ({ yesAnswer: false, noAnswer: true, answer: 'no' }));

  onPressHandler = () => {
    const { deckId, addNewCardRequest, navigation } = this.props;

    this.setState(() => ({ question: '', answer: '' }));
    addNewCardRequest(this.state, deckId);

    Toast.show({
      text: 'You have successfully added a New Card.',
      duration: 3000,
    });

    navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'Home',
        action: NavigationActions.back({ routeName: 'Home' }),
      }),
    );
  };

  render() {
    const {
      question, answer, yesAnswer, noAnswer,
    } = this.state;
    const {
      card, inputField, answerText, yesBtn, noBtn,
    } = styles;

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

          <Text style={answerText}>Please tap on Yes or No to choose your answer.</Text>

          <Button
            style={yesBtn}
            iconLeft={yesAnswer}
            block
            success
            rounded
            bordered
            onPress={this.yesClickHandler}
          >
            {yesAnswer && <Icon name="checkmark" />}
            <Text>Yes</Text>
          </Button>

          <Button
            style={noBtn}
            iconLeft={noAnswer}
            block
            danger
            rounded
            bordered
            onPress={this.noClickHandler}
          >
            {noAnswer && <Icon name="checkmark" />}
            <Text>No</Text>
          </Button>

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
  answerText: { textAlign: 'center', color: GREY },
  yesBtn: { marginTop: 20, marginBottom: 5 },
  noBtn: { marginTop: 5, marginBottom: 10 },
});

const mapStateToProps = (state, { navigation }) => ({
  deckId: navigation.state.params.deckId,
});

export default connect(
  mapStateToProps,
  { addNewCardRequest },
)(AddCardScreen);
