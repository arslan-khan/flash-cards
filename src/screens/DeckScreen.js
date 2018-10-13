import React, { Component } from 'react';
import {
  Content, Card, Text, Spinner, Button, H1,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchDeckRequest } from '../actions/decksActions';
import { TOMATO, GREY } from '../constants/colors';

class DeckScreen extends Component {
  static defaultProps = { selectedDeck: null };

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    selectedDeck: PropTypes.shape({}),
    deckId: PropTypes.string.isRequired,
    fetchDeckRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired,
  };

  componentDidMount = () => {
    const { deckId, fetchDeckRequest } = this.props;
    fetchDeckRequest(deckId);
  };

  render() {
    const {
      loading, selectedDeck, deckId, navigation,
    } = this.props;
    const {
      deckTitle, cardsCount, button, buttonRed,
    } = styles;

    if (loading || !selectedDeck) return <Spinner color={TOMATO} />;

    const { title, questions } = selectedDeck;

    return (
      <Content padder>
        <Card>
          <Text style={deckTitle}>
            <H1>{title}</H1>
          </Text>
          <Text style={cardsCount}>{`${questions.length} Card(s)`}</Text>

          {questions.length > 0 && (
            <Button
              rounded
              style={button}
              primary
              onPress={() => navigation.navigate({
                routeName: 'Quiz',
                params: { deckId },
              })
              }
            >
              <Text>Start Quiz</Text>
            </Button>
          )}

          <Button
            rounded
            style={[button, buttonRed]}
            danger
            onPress={() => navigation.navigate({
              routeName: 'AddCard',
              params: { deckId },
            })
            }
          >
            <Text>Add Card</Text>
          </Button>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  deckTitle: { paddingTop: 30, textAlign: 'center' },
  cardsCount: {
    paddingTop: 5,
    paddingBottom: 60,
    fontSize: 14,
    color: GREY,
    textAlign: 'center',
  },
  button: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonRed: {
    marginBottom: 30,
  },
});

const mapStateToProps = ({ decks }, { navigation }) => ({
  loading: decks.loading,
  selectedDeck: decks.selectedDeck,
  deckId: navigation.state.params.id,
});

export default connect(
  mapStateToProps,
  { fetchDeckRequest },
)(DeckScreen);
