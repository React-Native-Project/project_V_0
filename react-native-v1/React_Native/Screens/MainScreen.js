import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Button
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

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
          <TouchableHighlight
            style={styles.main}
            onPress={() => this.onPress("Numbers")}
          >
            <Text style={styles.text}>Numbers</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.main}
            onPress={() => this.onPress("ExercisesPage")}
          >
            <Text style={styles.text}>ExercisesPage</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.main}
            onPress={() => this.onPress("QuizLevels")}
          >
            <Text style={styles.text}>QuizLevels</Text>
          </TouchableHighlight>
        </ImageBackground>

        {/* <TouchableHighlight
        style={styles.main}
        onPress={() => this.onPress("Numbers")}
      >
        <ImageBackground
          source={require("../assets/num.png")}
          style={{
            width: "70%",
            height: "40%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Numbers</Text>
        </ImageBackground>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => this.onPress("ExercisesPage")}>
        <ImageBackground
          source={require("../assets/num.png")}
          style={{ width: "70%", height: "40%" }}
        >
          <Text>ExercisesPage</Text>
        </ImageBackground>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => this.onPress("QuizLevels")}>
        <ImageBackground
          source={require("../assets/num.png")}
          style={{
            width: "70%",
            height: "40%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>QuizLevels</Text>
        </ImageBackground>
      </TouchableHighlight> */}
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
