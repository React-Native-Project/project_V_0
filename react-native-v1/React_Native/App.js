import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExercisesPage from './Screens/ExercisesPage'
// import Navigation from './navgation'


import Numbers from './Screens/Numbers'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Numbers/> */}
      {/* <Navigation /> */}
      <ExercisesPage />
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
