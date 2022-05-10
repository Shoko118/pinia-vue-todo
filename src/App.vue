<script setup>
import { storeToRefs } from "pinia";
import { useMainStore } from "./store/useMainStore";

const store = useMainStore();

const { inputText, todos } = storeToRefs(store);
</script>

<template>
  <h1>Todo App</h1>

  <div>
    <label>Enter todo</label>
    <input type="text" placeholder="enter a todo" v-model="inputText" />
    <button @click="store.addTodo">Add</button>
  </div>

  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <div :class="{ line: todo.completed }">{{ todo.name }}</div>
      <button @click="store.completeTodo(todo)">completed</button>
      <button @click="store.deleteTodo(index)">delete</button>
    </li>
  </ul>
</template>

<style>
.line {
  text-decoration: line-through;
  color: limegreen;
}
</style>
