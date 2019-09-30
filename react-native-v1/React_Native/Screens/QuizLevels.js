import React, { Component } from "react";
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
    level: "Easy"
  };

  valueHandler = x => {
    this.setState({ value: x });
    if (x <= 20) this.setState({ level: "Easy" });
    else if (x <= 40) this.setState({ level: "Middle" });
    else this.setState({ level: "Hard" });
  };

  onPress = () => {
    this.props.navigation.navigate({ routeName: "QuizPage" });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Quiz Level: {this.state.level}</Text>
          <Text style={styles.text}>
            Number of questions: {this.state.value}
          </Text>
          <Slider
            value={this.state.value}
            onValueChange={value => this.valueHandler(value)}
            minimumValue={1}
            maximumValue={50}
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
    padding: 10,
    backgroundColor: "#c71875",
    bottom: 2
  },
  textbutton: {
    color: "white"
  }
});
