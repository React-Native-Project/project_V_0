import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet, Button } from "react-native";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

import Slider from "react-native-slider";

export default class QuizLevels extends Component {
  static navigationOptions = {
    title: "Math Quiz",
    headerStyle: { backgroundColor: "#c71875" },
    headerTitleStyle: { color: "white" }
  };

  state = {
    value: 1,
    value1: 1,
    level: "Easy",
    indexS: 0,
    indexE: 1
  };

  valueHandler = x => {
    this.setState({ value: x });
  };

  valueHandler2 = x => {
    this.setState({ value1: x });
    if (x === 1) this.setState({ level: "Easy", indexS: 0, indexE: 19 });
    else if (x === 2) this.setState({ level: "Middle", indexS: 20, indexE: 39 });
    else this.setState({ level: "Hard", indexS: 40, indexE: 59 });
  };

  onPress = () => {
    this.props.navigation.navigate("QuizPage", { numOfQ: this.state.value, indexS: this.state.indexS });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Quiz Level: {this.state.level}</Text>
          <Slider
            value={this.state.value1}
            onValueChange={value => this.valueHandler2(value)}
            minimumValue={1}
            maximumValue={3}
            step={1}
          />
          <Text style={styles.text}>Number of questions: {this.state.value}</Text>
          <Slider
            value={this.state.value}
            onValueChange={value => this.valueHandler(value)}
            minimumValue={1}
            maximumValue={20}
            step={1}
          />
        </View>

        <TouchableHighlight style={styles.main} onPress={() => this.onPress()}>
          <Text style={styles.textbutton}>let's Start</Text>
        </TouchableHighlight>
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
  },
  text: {
    fontSize: 20,
    color: "#c71875",
    marginTop: 20
  },
  button: {
    color: "white",
    backgroundColor: "#c71875"
  },
  main: {
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#c71875",
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    backgroundColor: "#c71875",
    margin: 25
  },
  textbutton: {
    fontSize: 30,
    color: "white",
    paddingBottom: 10
  }
});
