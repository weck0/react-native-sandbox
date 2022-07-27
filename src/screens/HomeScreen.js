import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to My App !</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to the List"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to the Images"
        onPress={() => navigation.navigate("Images")}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Reducer Square"
        onPress={() => navigation.navigate("ReducerSquare")}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
