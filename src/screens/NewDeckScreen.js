import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewDeckScreen = () => (
  <View style={styles.container}>
    <Text>New Deck Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewDeckScreen;
