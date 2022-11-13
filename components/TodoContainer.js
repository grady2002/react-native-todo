import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TodoItem from "./TodoItem";
import { Form } from "./Form";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  function pressHandler(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != id);
    });
  }
  function handleSubmit(todo_input) {
    setTodos((prevTodos) => {
      return [
        { todo: todo_input, key: Math.random().toString() },
        ...prevTodos,
      ];
    });
  }
  return (
    <View style={styles.todo_view}>
      <FlatList
        style={styles.todo_container}
        data={todos}
        renderItem={({ item }) => (
          <TodoItem data={item} pressHandler={pressHandler} />
        )}
      />
      <Form handleSubmit={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  todo_view: {
    width: "80%",
    flex: 1,
    alignItems: "center",
  },
  todo_container: {
    width: "100%",
    flexGrow: 0,
    paddingVertical: 50,
  },
});
