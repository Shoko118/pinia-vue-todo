import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    inputText: "",
    id: 1,
    todos: [
      { id: 1, name: "Learn HTML", completed: false },
      { id: 2, name: "Learn CSS", completed: false },
    ],
  }),
  getters: {},
  actions: {
    addTodo() {
      if (this.inputText.length === 0) return;

      const newTodo = {
        id: this.id++,
        name: this.inputText,
        completed: false,
      };

      this.todos.push(newTodo);
      this.inputText = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    completeTodo(todo) {
      todo.completed = !todo.completed;
    },
  },
});
