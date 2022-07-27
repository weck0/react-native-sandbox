import React, { useReducer } from "react";
import { Button, Text, View } from "react-native";

const COUNTER_NUMER = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: COUNTER_NUMER })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: COUNTER_NUMER })}
      />
      <Text>Current count: {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;
