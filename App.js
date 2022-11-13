import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <TodoContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
