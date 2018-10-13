import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import DecksScreen from '../screens/DecksScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
import DeckScreen from '../screens/DeckScreen';
import AddCardScreen from '../screens/AddCardScreen';
import QuizScreen from '../screens/QuizScreen';
import { TOMATO, GREY, WHITE } from '../constants/colors';

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
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="basket" size={24} style={{ color: tintColor }} />
        ),
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

const MainNavigator = createStackNavigator({
  Home: {
    screen: BottomTabNavigator,
    navigationOptions: () => ({
      title: 'Flash Cards',
      headerTintColor: WHITE,
      headerStyle: {
        backgroundColor: TOMATO,
      },
    }),
  },
  Deck: {
    screen: DeckScreen,
    path: 'deck/:id',
    navigationOptions: () => ({
      title: 'Deck',
      headerTintColor: WHITE,
      headerStyle: {
        backgroundColor: TOMATO,
      },
    }),
  },
  AddCard: {
    screen: AddCardScreen,
    path: 'deck/add-card/:id',
    navigationOptions: () => ({
      title: 'Add Card',
      headerTintColor: WHITE,
      headerStyle: {
        backgroundColor: TOMATO,
      },
    }),
  },
  Quiz: {
    screen: QuizScreen,
    path: 'deck/quiz/:id',
    navigationOptions: () => ({
      title: 'Quiz',
      headerTintColor: WHITE,
      headerStyle: {
        backgroundColor: TOMATO,
      },
    }),
  },
});

export default MainNavigator;
