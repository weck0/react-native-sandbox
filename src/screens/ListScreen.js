import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 30 },
    { name: "Friend #2", age: 20 },
    { name: "Friend #3", age: 10 },
    { name: "Friend #4", age: 70 },
    { name: "Friend #5", age: 33 },
    { name: "Friend #6", age: 23 },
    { name: "Friend #7", age: 15 },
    { name: "Friend #8", age: 14 },
    { name: "Friend #9", age: 19 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.text}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 50,
  },
});

export default ListScreen;
