import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput
} from 'react-native';
export default class ExercisesPage extends Component {
  state = {
    number1: 0,
    number2: 0,
    operator: "",
    answer: 0,
    defaultAnswer: "?",
    exercises: [],
    oneExercise: [],
    randomAnswer1: "",
    randomAnswer2: "",
    randomAnswer3: "",
    arrayNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  pressRandomAnswer1 = () => {
    if (this.state.answer === this.state.randomAnswer1) {
      Alert.alert('Excellent Right Answer')
      this.randomExercise(this.state.exercises)
    }
    else {
      Alert.alert('Wrong Answer')
    }
  }
  pressRandomAnswer4 = () => {
    if (this.state.answer === this.state.answer) {
      Alert.alert('Excellent Right Answer')
      // this.randomExercise(this.state.exercises)
      this.setState({ defaultAnswer: this.state.answer })
    }
    else {
      Alert.alert('Wrong Answer')
    }
  }
  randomExercise(obj) {
    console.log("random")
    console.log(obj)
    console.log(obj[Math.floor((Math.random() * obj.length))])
    this.setState({ oneExercise: obj[Math.floor((Math.random() * obj.length))] })
    console.log(this.state.oneExercise)

    var obj = this.state.oneExercise;
    for (var key in obj) {
      if (key === "number1") {
        this.setState({ number1: obj[key] })
        console.log(this.state.number1)
      }
      else if (key === "number2") {
        this.setState({ number2: obj[key] })
        console.log(this.state.number2)
      }
      else if (key === "operator") {
        this.setState({ operator: obj[key] })
        console.log(this.state.operator)
      }
      else if (key === "answer") {
        this.setState({ answer: obj[key] })
        console.log(this.state.answer)
      }
    }

  }
  randomNumber(numbers) {
    let answerRemove = this.state.arrayNumbers.indexOf(this.state.answer);
    if (answerRemove > -1) {
      this.state.arrayNumbers.splice(answerRemove, 1);
    }
    console.log("answer remove ", this.state.answer)
    console.log("answer remove from array numbers", this.state.arrayNumbers)
    //randomAnswer1
    this.setState({ randomAnswer1: numbers[Math.floor((Math.random() * numbers.length))] })
    console.log('randomAnswer1', this.state.randomAnswer1)
    let remove1 = this.state.arrayNumbers.indexOf(this.state.randomAnswer1);
    if (remove1 > -1) {
      this.state.arrayNumbers.splice(remove1, 1);
    }
    console.log(this.state.arrayNumbers)

    //randomAnswer2
    this.setState({ randomAnswer2: numbers[Math.floor((Math.random() * numbers.length))] })
    console.log('randomAnswer2', this.state.randomAnswer2)
    let remove2 = this.state.arrayNumbers.indexOf(this.state.randomAnswer2);
    if (remove2 > -1) {
      this.state.arrayNumbers.splice(remove2, 1);
    }
    console.log(this.state.arrayNumbers)

    //randomAnswer3
    this.setState({ randomAnswer3: numbers[Math.floor((Math.random() * numbers.length))] })
    console.log('randomAnswer3', this.state.randomAnswer3)
    let remove3 = this.state.arrayNumbers.indexOf(this.state.randomAnswer3);
    if (remove3 > -1) {
      this.state.arrayNumbers.splice(remove3, 1);
    }
    console.log(this.state.arrayNumbers)

  }
  componentDidMount() {
    console.log("componentDidMount result")
    axios.get('http://10.60.175.26:9000/test')
      .then(response => {
        console.log("componentDidMount then")
        this.setState({ exercises: response.data })
        console.log(response.data);
        console.log("exercises", this.state.exercises);
        this.randomExercise(this.state.exercises)
        this.randomNumber(this.state.arrayNumbers)

      })
      .catch(error => {
        console.log("componentDidMount error")
        console.log("Error", error);
      });
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            style={{ height: 40, width: 70, fontSize: 40, textAlign: 'center' }}
            value={this.state.number1 + ""}
          />
          <TextInput
            style={{ height: 40, width: 70, fontSize: 40, textAlign: 'center' }}
            value={this.state.operator}
          />
          <TextInput
            style={{ height: 40, width: 70, fontSize: 40, textAlign: 'center' }}
            value={this.state.number2 + ""}
          />
          <Text style={styles.textOpartor}>  =  </Text>
          <TextInput
            style={{ height: 40, width: 70, fontSize: 40, textAlign: 'center' }}
            value={this.state.defaultAnswer + ""}

          />
        </View>
        <View style={styles.row1}>
          <View style={styles.buttonstyle}>
            {/* onPress={() => Alert.alert('1')} */}
            <TouchableOpacity style={{ height: 50, width: 130, backgroundColor: 'pink' }} title="1"
              onPress={this.pressRandomAnswer1}>
              <Text style={styles.textFormat}
                value={this.state.randomAnswer1}
              >{this.state.randomAnswer1}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonstyle}>

            <TouchableOpacity style={{ height: 50, width: 130, backgroundColor: 'pink' }} title="2"
              onPress={() => Alert.alert('2')}>
              <Text style={styles.textFormat}
                value={this.state.randomAnswer2}>{this.state.randomAnswer2}</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.row2}>
          <View style={styles.buttonstyle}>

            <TouchableOpacity style={{ height: 50, width: 130, backgroundColor: 'pink' }} title="3"
              onPress={() => Alert.alert('3')}>
              <Text style={styles.textFormat}
                value={this.state.randomAnswer3}
              >{this.state.randomAnswer3}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonstyle}>

            <TouchableOpacity style={{ height: 50, width: 130, backgroundColor: 'pink' }} title="4"
              onPress={this.pressRandomAnswer4}>
              <Text style={styles.textFormat}
                value={this.state.answer}>{this.state.answer}</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  text: {
    color: 'red',
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
    margin: 20
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    margin: 20
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center'
  },
  buttonstyle: {
    margin: 10,
    // color: 'blue',
    width: 140,
  },
  textFormat: {
    textAlign: "center",
    paddingTop: 13,

  },

  textOpartor: {
    textAlign: "center",
    fontSize: 40,

  }
});