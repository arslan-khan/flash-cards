import React, { Component } from 'react';
import {
  Text, Spinner, Card, Button, Content, H1,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card';

import { fetchDeckRequest } from '../actions/decksActions';
import { TOMATO, GREY } from '../constants/colors';

class QuizScreen extends Component {
  static defaultProps = { selectedDeck: null };

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    selectedDeck: PropTypes.shape({}),
    deckId: PropTypes.string.isRequired,
    fetchDeckRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired,
  };

  state = {
    currentQuestionNumber: 0,
    correctAnswers: 0,
    InCorrectAnswers: 0,
    cardFlipped: false,
  };

  componentDidMount = () => {
    const { deckId, fetchDeckRequest } = this.props;
    fetchDeckRequest(deckId);
  };

  updateQuestionNumber = () => this.setState(({ currentQuestionNumber }) => ({
    currentQuestionNumber: currentQuestionNumber + 1,
  }));

  flipCard = () => this.setState(({ cardFlipped }) => ({ cardFlipped: !cardFlipped }));

  correctClickHandler = () => {
    this.updateQuestionNumber();
    this.flipCard();
    this.setState(({ correctAnswers }) => ({ correctAnswers: correctAnswers + 1 }));
  };

  inCorrectClickHandler = () => {
    this.updateQuestionNumber();
    this.flipCard();
    this.setState(({ InCorrectAnswers }) => ({ InCorrectAnswers: InCorrectAnswers + 1 }));
  };

  render() {
    const { loading, selectedDeck } = this.props;
    const {
      currentQuestionNumber, cardFlipped, correctAnswers, InCorrectAnswers,
    } = this.state;
    const {
      main, secondary, button, count, correctBtn,
    } = styles;

    if (loading || !selectedDeck) return <Spinner color={TOMATO} />;

    const { title, questions } = selectedDeck;
    const currentQuestion = questions[currentQuestionNumber];

    if (currentQuestionNumber === questions.length) {
      return (
        <Content padder>
          <Card>
            <Text style={secondary}>{`You got ${correctAnswers} questions correct.`}</Text>
            <Text style={secondary}>{`You got ${InCorrectAnswers} questions incorrect.`}</Text>
            <Text style={secondary}>
              {`That is a score of ${((correctAnswers / questions.length) * 100).toFixed(2)}%.`}
            </Text>
          </Card>
        </Content>
      );
    }

    return (
      <Content padder>
        <FlipCard
          style={{ borderWidth: 0, flex: 1 }}
          friction={6}
          perspective={1000}
          flipHorizontal
          flipVertical={false}
          clickable={false}
          flip={cardFlipped}
        >
          {/* Front Side */}
          <Card>
            <Text style={main}>
              <H1>{title}</H1>
            </Text>
            <Text style={secondary}>{currentQuestion.question}</Text>

            <Button rounded style={button} primary onPress={this.flipCard}>
              <Text>Show Answer</Text>
            </Button>

            <Text style={count}>{`${currentQuestionNumber + 1} | ${questions.length}`}</Text>
          </Card>

          {/* Back Side */}
          <Card>
            <Text style={main}>
              <H1>{currentQuestion.question}</H1>
            </Text>
            <Text style={secondary}>{currentQuestion.answer}</Text>

            <Button rounded style={[button, correctBtn]} primary onPress={this.correctClickHandler}>
              <Text>Correct</Text>
            </Button>
            <Button rounded style={button} danger onPress={this.inCorrectClickHandler}>
              <Text>InCorrect</Text>
            </Button>
          </Card>
        </FlipCard>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  main: { paddingTop: 40, textAlign: 'center', marginBottom: 10 },
  secondary: { textAlign: 'center', marginBottom: 40, color: GREY },
  button: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  correctBtn: { marginBottom: 10 },
  count: { paddingLeft: 20, color: GREY, marginBottom: 20 },
});

const mapStateToProps = ({ decks }, { navigation }) => ({
  loading: decks.loading,
  selectedDeck: decks.selectedDeck,
  deckId: navigation.state.params.deckId,
});

export default connect(
  mapStateToProps,
  { fetchDeckRequest },
)(QuizScreen);
