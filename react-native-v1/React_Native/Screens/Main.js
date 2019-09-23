import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Main() {
    return (
      <View>
          <Text>Test 123</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
