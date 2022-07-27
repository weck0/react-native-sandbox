import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  textOneStyle: {
    backgroundColor: "red",
    borderWidth: 3,
    height: 100,
    width: 100,
  },
  textTwoStyle: {
    backgroundColor: "blue",
    borderWidth: 3,
    height: 100,
    width: 100,
    alignSelf: "flex-end",
  },
  textThreeStyle: {
    backgroundColor: "green",
    borderWidth: 3,
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
