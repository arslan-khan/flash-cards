import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Title, Root, Right, Icon } from 'native-base';

import DecksScreen from './src/screens/DecksScreen';
import QuizScreen from './src/screens/QuizScreen';
import NewDeckScreen from './src/screens/NewDeckScreen';
import NewQuestionScreen from './src/screens/NewQuestionScreen';
import { TOMATO, GREY } from './src/constants/colors';

const Drawer = createBottomTabNavigator(
  {
    Decks: {
      screen: DecksScreen,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="albums" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: {
        tabBarLabel: 'Quiz',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="chatbubbles" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="basket" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    NewQuestion: {
      screen: NewQuestionScreen,
      navigationOptions: {
        tabBarLabel: 'New Question',
        tabBarIcon: ({ tintColor }) => <Icon name="book" size={24} style={{ color: tintColor }} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: TOMATO,
      inactiveTintColor: GREY,
    },
  },
);

class App extends Component {
  state = { loading: true };

  async componentWillMount() {
    await Font.loadAsync({
      // eslint-disable-next-line
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      // eslint-disable-next-line
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      // eslint-disable-next-line
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title style={{ color: TOMATO }}>Flash Cards</Title>
          </Body>
          <Right />
        </Header>

        <Drawer />
      </Container>
    );
  }
}

export default App;
