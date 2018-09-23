import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewQuestionScreen = () => (
  <View style={styles.container}>
    <Text>New Question Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewQuestionScreen;
