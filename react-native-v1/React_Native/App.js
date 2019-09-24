import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MathNavigator from "./navgation";

import Numbers from "./Screens/Numbers";

export default function App() {
  return (
    <MathNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
