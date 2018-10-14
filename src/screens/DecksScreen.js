import React, { Component } from 'react';
import {
  Content, Card, Text, H1, Spinner, Button,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import { fetchDecksRequest } from '../actions/decksActions';
import { TOMATO, GREY } from '../constants/colors';

class DecksScreen extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchDecksRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { fetchDecksRequest } = this.props;
    fetchDecksRequest();
  }

  render() {
    const { loading, data, navigation } = this.props;
    const {
      noDeck, deckTitle, cardsCount, button,
    } = styles;

    if (loading) return <Spinner color={TOMATO} />;

    if (!data.length) {
      return (
        <Content padder>
          <Card>
            <Text style={noDeck}>
              You have no decks currently created. Please go to the new deck screen to create one.
            </Text>
          </Card>
        </Content>
      );
    }

    return (
      <Content padder>
        {data.map(({ id, title, questions }) => (
          <Card key={id}>
            <Text style={deckTitle}>
              <H1>{title}</H1>
            </Text>
            <Text style={cardsCount}>{`${questions.length} Card(s)`}</Text>
            <Button
              rounded
              style={button}
              danger
              onPress={() => navigation.navigate({
                routeName: 'Deck',
                params: { id },
              })
              }
            >
              <Text>View Cards</Text>
            </Button>
          </Card>
        ))}
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  noDeck: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'center',
    fontSize: 20,
    color: GREY,
  },
  deckTitle: { paddingTop: 30, textAlign: 'center' },
  cardsCount: {
    paddingTop: 5,
    paddingBottom: 30,
    fontSize: 14,
    color: GREY,
    textAlign: 'center',
  },
  button: {
    marginBottom: 30,
    alignSelf: 'center',
  },
});

const mapStateToProps = ({ decks }) => ({ loading: decks.loading, data: decks.data });

export default connect(
  mapStateToProps,
  { fetchDecksRequest },
)(DecksScreen);
