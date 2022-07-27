import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const name = "Florian";
  return (
    <View>
      <Text style={styles.text1}>This is my component element !</Text>
      <Text style={styles.text2}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
