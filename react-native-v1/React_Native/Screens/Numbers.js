import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export default class SliderNumbers extends React.Component {
  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 50
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render() {
    return <AppIntroSlider slides={slides} renderItem={this.renderItem} />;
  }
}

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 480
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  title: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 16
  }
});

const slides = [
  {
    key: "s1",
    text: "1 Banana",
    title: "Number 1",
    image: require("../Img/one1.jpg"),
    backgroundColor: "#f6437b"
  },
  {
    key: "s2",
    title: "Number 2",
    text: "2 Cats",
    image: require("../Img/two2.jpg"),
    backgroundColor: "#febe29"
  },
  {
    key: "s3",
    title: "Number 3",
    text: "3 Birds",
    image: require("../Img/three3.jpg"),
    backgroundColor: "#3395ff"
  },
  {
    key: "s4",
    title: "Number 4",
    text: "4 Pies",
    image: require("../Img/four4.jpg"),
    backgroundColor: "#1CB121"
  },
  {
    key: "s5",
    title: "Number 5",
    text: "5 Chickens",
    image: require("../Img/five5.jpg"),
    backgroundColor: "#f6437b"
  },
  {
    key: "s6",
    title: "Number 6",
    text: "6 Guitars",
    image: require("../Img/six6.jpg"),
    backgroundColor: "#febe29"
  },
  {
    key: "s7",
    title: "Number 7",
    text: "7 Apples",
    image: require("../Img/seven7.jpg"),
    backgroundColor: "#3395ff"
  },
  {
    key: "s8",
    title: "Number 8",
    text: "8 Spiders",
    image: require("../Img/eight8.jpg"),
    backgroundColor: "#1CB121"
  },
  {
    key: "s9",
    title: "Number 9",
    text: "9 Tomato Slides",
    image: require("../Img/nine9.jpg"),
    backgroundColor: "#f6437b"
  },
  {
    key: "s10",
    title: "Number 10",
    text: "10 Frogs",
    image: require("../Img/ten10.jpg"),
    backgroundColor: "#febe29"
  }
];



