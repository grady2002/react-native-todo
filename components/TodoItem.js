import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TodoItem({ data, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(data.key)}>
      <Text style={styles.todo_item}>{data.todo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo_item: {
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "dotted",
    color: "#333",
    fontSize: 15,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    opacity: 0.7,
  },
});
