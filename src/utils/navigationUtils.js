import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import DecksScreen from '../screens/DecksScreen';
import QuizScreen from '../screens/QuizScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
import NewQuestionScreen from '../screens/NewQuestionScreen';
import { TOMATO, GREY } from '../constants/colors';

const BottomTabNavigator = createBottomTabNavigator(
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

export default BottomTabNavigator;