import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PDFCard from "./PDFCard";

export default class Showroom extends Component {
  docs = [
    {
      name: "pdf1",
      source: "http://samples.leanpub.com/thereactnativebook-sample.pdf"
    },
    {
      name: "pdf2",
      source: "http://samples.leanpub.com/thereactnativebook-sample.pdf"
    },
    {
      name: "pdf3",
      source: "http://samples.leanpub.com/thereactnativebook-sample.pdf"
    },
    {
      name: "pdf4",
      source: "http://samples.leanpub.com/thereactnativebook-sample.pdf"
    },
    {
      name: "pdf5",
      source: "http://samples.leanpub.com/thereactnativebook-sample.pdf"
    },
    {
      name: "pdf6",
      source: "http://samples.leanpub.com/thereactnativebook-sample.pdf"
    }
  ];
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}> Pick A Slide </Text>
        </View>
        <View style={styles.viewContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {this.docs.map((e, index) => {
              return (
                <PDFCard
                  key={index}
                  name={e.name}
                  source={e.source}
                  navigation={this.props.navigation}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FDFDFD"
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%"
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "ProximaNova-Light"
  },
  scrollContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FDFDFD",
    width: "100%",
    height: "200%"
  },
  viewContainer: {
    flex: 1
  }
});
