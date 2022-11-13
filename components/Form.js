import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export function Form({ handleSubmit }) {
  const [input, setInput] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Enter todo ..."
        onChangeText={(value) => {
          setInput(value);
        }}
        style={styles.input}
      />
      <View style={styles.button}>
        <Button
          title="Add Todo"
          color="#4185f3"
          onPress={() => handleSubmit(input)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderBottomColor: "#333",
  },
  button: {
    paddingVertical: 20,
  },
});
