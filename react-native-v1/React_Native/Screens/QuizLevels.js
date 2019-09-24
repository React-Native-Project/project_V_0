import React, { Component } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import Slider from "react-native-slider";

export default class QuizLevels extends Component {
  static navigationOptions = {
    title: "Quiz",
    headerStyle: { backgroundColor: "#c71875" },
    headerTitleStyle: { color: "white" }
  };

  state = {
    value: 1
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
          minimumValue={1}
          maximumValue={60}
          step={1}
        />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
