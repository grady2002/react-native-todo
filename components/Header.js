import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>To-do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4185f3",
    width: "100%",
    paddingTop: 65,
    paddingBottom: 25,
  },
  text: {
    textAlign: "center",
    fontWeight: "700",
    color: "white",
    fontSize: 20,
  },
});
