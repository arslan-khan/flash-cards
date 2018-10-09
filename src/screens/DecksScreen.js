import React, { Component } from 'react';
import {
  Content, Card, Text, H1, Spinner,
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
  };

  componentDidMount() {
    const { fetchDecksRequest } = this.props;
    fetchDecksRequest();
  }

  render() {
    const { loading, data } = this.props;
    const { noDeck, deckTitle, cardsCount } = styles;

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
});

const mapStateToProps = ({ decks }) => ({ loading: decks.loading, data: decks.data });

export default connect(
  mapStateToProps,
  { fetchDecksRequest },
)(DecksScreen);
