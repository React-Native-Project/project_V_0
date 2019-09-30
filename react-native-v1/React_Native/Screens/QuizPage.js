import React, { Component } from "react";
import { View, Text, Picker, StyleSheet, TouchableHighlight, TextInput } from "react-native";
import { quiz } from "../Components/QuizLevelsNav.js";

export default class QuizPage extends Component {
  static navigationOptions = {
    title: "Quiz page",
    headerStyle: { backgroundColor: "#c71875" },
    headerTitleStyle: { color: "white" }
  };

  state = {
    index: 0,
    numOfQ: 1,
    Data: [{ Q: "", A: "" }],
    answered: "",
    qCounter: 0,
    aCounter: 0,
    inputValue: ""
  };

  componentDidMount = () => {
    let i = JSON.stringify(this.props.navigation.getParam("indexS", 0));
    let nq = parseInt(JSON.stringify(this.props.navigation.getParam("numOfQ", 1)));
    let f = parseInt(i) + parseInt(nq);
    this.setState({ index: i, Data: quiz.slice(i, f), numOfQ: nq }, () => {});
  };

  check = text => {
    this.setState({ answered: text });
  };

  submit = () => {
    let a = this.state.qCounter;
    let b = this.state.aCounter;
    if (this.state.Data[a].A == this.state.answered) {
      b = b + 1;
      this.setState({ aCounter: b });
    }
    a = a + 1;
    this.setState({ answered: "" });
    if (this.state.numOfQ == a) {
      this.setState({ qCounter: 0 });
      this.props.navigation.navigate("scorepage", { correct: this.state.aCounter, totalQ: this.state.numOfQ });
    } else this.setState({ qCounter: a });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {" "}
          Result: {this.state.aCounter}/{this.state.numOfQ}
        </Text>
        <Text style={styles.text}> {this.state.Data[this.state.qCounter].Q} </Text>
        <View style={{ width: 150 }}>
          <TextInput
            style={styles.input}
            keyboardType={"numeric"}
            onChangeText={text => this.check(text)}
            value={this.state.answered}
          />
        </View>
        <TouchableHighlight style={styles.main} onPress={this.submit} disabled={this.state.clickbutton}>
          <Text style={styles.textbutton}>Next</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  text: {
    color: "black",
    fontSize: 50,
    justifyContent: "center",
    marginTop: 20
  },
  input: {
    borderColor: "#c71875",
    borderWidth: 5
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
  textbutton: {
    fontSize: 30,
    color: "white"
  }
});
