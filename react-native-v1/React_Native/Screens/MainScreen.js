import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Button
} from "react-native";
class Main extends Component {
  static navigationOptions = {
    title: "Mathematical Kids",
    headerStyle: { backgroundColor: "#c71875" },
    headerTitleStyle: { color: "white" }
  };

  onPress = route => {
    this.props.navigation.navigate({ routeName: route });
  };
  render() {
    return (
      <View style={styles.screen}>
        <ImageBackground
          source={require("../assets/num.jpg")}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableHighlight style={styles.main} onPress={() => this.onPress("Numbers")}>
            <Text style={styles.text}>Numbers</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.main}
            onPress={() => this.onPress("ExercisesTypes")}
          >

            <Text style={styles.text}>Exercises</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.main} onPress={() => this.onPress("QuizLevels")}>
            <Text style={styles.text}>Quiz</Text>
          </TouchableHighlight>
        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },

  main: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c71875",
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    padding: 10,
    backgroundColor: "#c71875",
    margin: 20
  },

  text: {
    fontSize: 30,
    color: "white"
  }
});

export default Main;
