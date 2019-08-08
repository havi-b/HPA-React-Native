import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class PDFCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.pdfCard}
          onPress={() =>
            this.props.navigation.navigate("PDF", { source: this.props.source })
          }
        >
          <Text>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    backgroundColor: "#FDFDFD",
    borderRadius: 3,
    borderWidth: 0.2,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 5
  },
  pdfCard: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 150
  }
});
