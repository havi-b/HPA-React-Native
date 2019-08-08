import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Text> Dashboard </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FDFDFD"
  }
});
