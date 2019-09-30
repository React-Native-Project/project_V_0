import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Slider from "react-native-slider";

export default class QuizLevels extends Component {
  static navigationOptions = {
    title: "Quiz Score",
    headerStyle: { backgroundColor: "#c71875" },
    headerTitleStyle: { color: "white" }
  };

  state = {};

  render() {
    let R = JSON.stringify(this.props.navigation.getParam("correct", 0));
    let T = JSON.stringify(this.props.navigation.getParam("totalQ", 0));
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/num.jpg")}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={styles.main}>
            <Text style={styles.text}> Quiz Score: </Text>
            <Text style={styles.text}>
              {" "}
              {R}/{T}{" "}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text: {
    fontSize: 50,
    color: "white",
    margin: 10,
    backgroundColor: "#c71875"
  },
  main: {
    // justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#c71875",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#c71875",
    padding: 10
  },
  textbutton: {
    color: "white"
  }
});
