import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExercisesTypes from './Screens/ExercisesTypes';
export default function App() {
  return (
    <View style={styles.container}>
      <ExercisesTypes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
