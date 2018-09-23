import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import {
  Container, Header, Left, Body, Title, Root, Right,
} from 'native-base';

import BottomTabNavigator from './src/utils/navigationUtils';
import { TOMATO } from './src/constants/colors';

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

        <BottomTabNavigator />
      </Container>
    );
  }
}

export default App;
