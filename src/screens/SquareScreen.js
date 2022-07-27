import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourDetail from "../components/ColourDetail";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(50);
  const [green, setGreen] = useState(50);
  const [blue, setBlue] = useState(50);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "red":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <Text>Square Screen</Text>
      <ColourDetail
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColourDetail
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColourDetail
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>RED = {red}</Text>
      <Text>GREEN = {green}</Text>
      <Text>BLUE = {blue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SquareScreen;
