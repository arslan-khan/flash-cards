import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuizScreen = () => (
  <View style={styles.container}>
    <Text>Quiz Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QuizScreen;
