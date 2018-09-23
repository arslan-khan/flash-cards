import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DecksScreen = () => (
  <View style={styles.container}>
    <Text>Decks Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DecksScreen;
