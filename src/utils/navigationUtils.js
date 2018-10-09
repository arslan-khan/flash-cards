import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import DecksScreen from '../screens/DecksScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
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

export default BottomTabNavigator;
