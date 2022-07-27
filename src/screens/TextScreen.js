import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";

const TextScreen = () => {
  const [currentText, setCurrentText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView>
      <View>
        <Text>Enter your Name:</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          value={currentText}
          onChangeText={(newValue) => setCurrentText(newValue)}
        />

        <Text>Your name is {currentText}</Text>
      </View>
      <View>
        <Text>Enter your Password:</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          onChangeText={(newValue) => setPassword(newValue)}
        />
      </View>
      {password.length < 5 ? (
        <Text>The password must be of at least 5 characters</Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
