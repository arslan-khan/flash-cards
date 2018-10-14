import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { Container, Root } from 'native-base';

import MainNavigator from '../utils/navigationUtils';

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
    const { loading } = this.state;

    if (loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return (
      <Container style={{ backgroundColor: '#f8f8f8' }}>
        <MainNavigator />
      </Container>
    );
  }
}

export default AppRoot;
