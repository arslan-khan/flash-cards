import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import {
  Container, Header, Left, Body, Title, Root, Right,
} from 'native-base';

import BottomTabNavigator from '../utils/navigationUtils';
import { TOMATO, WHITE } from '../constants/colors';

class AppRoot extends Component {
  state = { loading: true };

  async componentDidMount() {
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
        <Header style={{ backgroundColor: TOMATO }}>
          <Left />
          <Body>
            <Title style={{ color: WHITE }}>Flash Cards</Title>
          </Body>
          <Right />
        </Header>

        <BottomTabNavigator />
      </Container>
    );
  }
}

export default AppRoot;
