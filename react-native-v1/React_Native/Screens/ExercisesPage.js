import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, View, Text, Alert, TouchableOpacity, TextInput, TouchableHighlight } from "react-native";
export default class ExercisesPage extends Component {
  state = {
    number1: 0,
    number2: 0,
    operator: "",
    answer: 0,
    defaultAnswer: "?",
    resetdefaultAnswer: "?",
    exercises: [],
    oneExercise: [],
    randomAnswer1: "",
    randomAnswer2: "",
    randomAnswer3: "",
    arrayNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    answerRandomValue1: 0,
    answerRandomValue2: 0,
    answerRandomValue3: 0,
    answerRandomValue4: 0,
    arrayRandomValue: [],
    clickbutton: true
  };
  componentDidMount() {
    console.log('clickbutton', this.state.clickbutton)
    console.log("componentDidMount result")
    axios.get('http://10.60.175.26:9000/test')

      .then(response => {
        console.log("componentDidMount then");
        this.setState({ exercises: response.data });
        console.log(response.data);
        console.log("exercises", this.state.exercises);
        this.randomExercise(this.state.exercises);
        this.randomNumber(this.state.arrayNumbers);
      })
      .catch(error => {
        console.log("componentDidMount error");
        console.log("Error", error);
      });
  }
  pressRandomAnswer1 = () => {
    if (this.state.answerRandomValue1 === this.state.answer) {
      Alert.alert("Excellent Right Answer");
      this.setState({ defaultAnswer: this.state.answer });
      this.setState({ clickbutton: false });
    } else {
      Alert.alert("Wrong Answer");
    }
  };
  pressRandomAnswer2 = () => {
    if (this.state.answerRandomValue2 === this.state.answer) {
      Alert.alert("Excellent Right Answer");
      this.setState({ defaultAnswer: this.state.answer });
      this.setState({ clickbutton: false });
    } else {
      Alert.alert("Wrong Answer");
    }
  };
  pressRandomAnswer3 = () => {
    if (this.state.answerRandomValue3 === this.state.answer) {
      Alert.alert("Excellent Right Answer");
      this.setState({ defaultAnswer: this.state.answer });
      this.setState({ clickbutton: false });
    } else {
      Alert.alert("Wrong Answer");
    }
  };
  pressRandomAnswer4 = () => {
    if (this.state.answerRandomValue4 === this.state.answer) {
      Alert.alert("Excellent Right Answer");
      this.setState({ defaultAnswer: this.state.answer });
      this.setState({ clickbutton: false });
    } else {
      Alert.alert("Wrong Answer");
    }
  };

  randomExercise(obj) {
    console.log("random");
    console.log(obj);
    console.log(obj[Math.floor(Math.random() * obj.length)]);
    this.setState({ oneExercise: obj[Math.floor(Math.random() * obj.length)] });
    console.log(this.state.oneExercise);

    var obj = this.state.oneExercise;
    for (var key in obj) {
      if (key === "number1") {
        this.setState({ number1: obj[key] });
        console.log(this.state.number1);
      } else if (key === "number2") {
        this.setState({ number2: obj[key] });
        console.log(this.state.number2);
      } else if (key === "operator") {
        this.setState({ operator: obj[key] });
        console.log(this.state.operator);
      } else if (key === "answer") {
        this.setState({ answer: obj[key] });
        console.log(this.state.answer);
      }
    }
  }
  
  randomNumber(numbers) {
    let answerRemove = this.state.arrayNumbers.indexOf(this.state.answer);
    if (answerRemove > -1) {
      this.state.arrayNumbers.splice(answerRemove, 1);
    }
    console.log("answer remove ", this.state.answer);
    console.log("answer remove from array numbers", this.state.arrayNumbers);
    //randomAnswer1
    this.setState({ randomAnswer1: numbers[Math.floor(Math.random() * numbers.length)] });
    console.log("randomAnswer1", this.state.randomAnswer1);
    let remove1 = this.state.arrayNumbers.indexOf(this.state.randomAnswer1);
    if (remove1 > -1) {
      this.state.arrayNumbers.splice(remove1, 1);
    }
    console.log(this.state.arrayNumbers);

    //randomAnswer2
    this.setState({ randomAnswer2: numbers[Math.floor(Math.random() * numbers.length)] });
    console.log("randomAnswer2", this.state.randomAnswer2);
    let remove2 = this.state.arrayNumbers.indexOf(this.state.randomAnswer2);
    if (remove2 > -1) {
      this.state.arrayNumbers.splice(remove2, 1);
    }
    console.log(this.state.arrayNumbers);

    //randomAnswer3
    this.setState({ randomAnswer3: numbers[Math.floor(Math.random() * numbers.length)] });
    console.log("randomAnswer3", this.state.randomAnswer3);
    let remove3 = this.state.arrayNumbers.indexOf(this.state.randomAnswer3);
    if (remove3 > -1) {
      this.state.arrayNumbers.splice(remove3, 1);
    }
    console.log(this.state.arrayNumbers);
    //push answers values to arrayRandomValue
    this.state.arrayRandomValue.push(this.state.randomAnswer1);
    this.state.arrayRandomValue.push(this.state.randomAnswer2);
    this.state.arrayRandomValue.push(this.state.randomAnswer3);
    this.state.arrayRandomValue.push(this.state.answer);
    console.log("arrayRandomValue", this.state.arrayRandomValue);

    this.setState({
      answerRandomValue1: this.state.arrayRandomValue[Math.floor(Math.random() * this.state.arrayRandomValue.length)]
    });
    console.log("answerRandomValue1", this.state.answerRandomValue1);
    let removeValue1 = this.state.arrayRandomValue.indexOf(this.state.answerRandomValue1);
    if (removeValue1 > -1) {
      this.state.arrayRandomValue.splice(removeValue1, 1);
    }
    this.setState({
      answerRandomValue2: this.state.arrayRandomValue[Math.floor(Math.random() * this.state.arrayRandomValue.length)]
    });
    console.log("answerRandomValue2", this.state.answerRandomValue2);
    let removeValue2 = this.state.arrayRandomValue.indexOf(this.state.answerRandomValue2);
    if (removeValue2 > -1) {
      this.state.arrayRandomValue.splice(removeValue2, 1);
    }
    this.setState({
      answerRandomValue3: this.state.arrayRandomValue[Math.floor(Math.random() * this.state.arrayRandomValue.length)]
    });
    console.log("answerRandomValue3", this.state.answerRandomValue3);
    let removeValue3 = this.state.arrayRandomValue.indexOf(this.state.answerRandomValue3);
    if (removeValue3 > -1) {
      this.state.arrayRandomValue.splice(removeValue3, 1);
    }
    this.setState({
      answerRandomValue4: this.state.arrayRandomValue[Math.floor(Math.random() * this.state.arrayRandomValue.length)]
    });
    console.log("answerRandomValue4", this.state.answerRandomValue4);
    let removeValue4 = this.state.arrayRandomValue.indexOf(this.state.answerRandomValue4);
    if (removeValue4 > -1) {
      this.state.arrayRandomValue.splice(removeValue4, 1);
    }
  }
  refresh = () => {
    this.setState({ defaultAnswer: this.state.resetdefaultAnswer })
    console.log("refresh result")
    axios.get('http://10.60.175.26:9000/test')

      .then(response => {
        console.log("refresh then");
        this.setState({ exercises: response.data });
        console.log(response.data);
        console.log("exercises", this.state.exercises);
        this.setState({ arrayNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] });
        this.randomExercise(this.state.exercises);
        this.randomNumber(this.state.arrayNumbers);
        this.setState({ clickbutton: true });
      })
      .catch(error => {
        console.log("componentDidMount error");
        console.log("Error", error);
      });
  };

  render() {
    console.log("clickbutton", this.state.clickbutton);
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput style={{ height: 40, width: 70, fontSize: 40, textAlign: "center" }} value={this.state.number1 + ""} />
          <TextInput style={{ height: 40, width: 70, fontSize: 40, textAlign: "center" }} value={this.state.operator} />
          <TextInput style={{ height: 40, width: 70, fontSize: 40, textAlign: "center" }} value={this.state.number2 + ""} />
          <Text style={styles.textOpartor}> = </Text>
          <TextInput
            style={{ height: 40, width: 70, fontSize: 40, textAlign: "center" }}
            value={this.state.defaultAnswer + ""}
          />
        </View>
        <View style={styles.row1}>
          <View style={styles.buttonstyle}>
            <TouchableOpacity
              style={{ height: 50, width: 130, backgroundColor: "pink" }}
              title="1"
              onPress={this.pressRandomAnswer1}
            >
              <Text style={styles.textFormat} value={this.state.answerRandomValue1}>
                {this.state.answerRandomValue1}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonstyle}>
            <TouchableOpacity
              style={{ height: 50, width: 130, backgroundColor: "pink" }}
              title="2"
              onPress={this.pressRandomAnswer2}
            >
              <Text style={styles.textFormat} value={this.state.answerRandomValue2}>
                {this.state.answerRandomValue2}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.buttonstyle}>
            <TouchableOpacity
              style={{ height: 50, width: 130, backgroundColor: "pink" }}
              title="3"
              onPress={this.pressRandomAnswer3}
            >
              <Text style={styles.textFormat} value={this.state.answerRandomValue3}>
                {this.state.answerRandomValue3}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonstyle}>
            <TouchableOpacity
              style={{ height: 50, width: 130, backgroundColor: "pink" }}
              title="4"
              onPress={this.pressRandomAnswer4}
            >
              <Text style={styles.textFormat} value={this.state.answerRandomValue4}>
                {this.state.answerRandomValue4}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row3}>
          <TouchableHighlight style={styles.main} onPress={this.refresh} disabled={this.state.clickbutton}>
            <Text style={styles.textbutton}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 120
  },
  text: {
    color: "red",
    marginTop: 70
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 20
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 20
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  row3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonstyle: {
    margin: 10,
    width: 140
  },
  textFormat: {
    textAlign: "center",
    paddingTop: 13
  },

  textOpartor: {
    textAlign: "center",
    fontSize: 40
  },
  main: {
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#c71875",
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: 90,
    padding: 10,
    backgroundColor: "#c71875",
    bottom: 2,
    marginTop: 90
  },
  textbutton: {
    color: "white",
    paddingTop: 3
  }
});
