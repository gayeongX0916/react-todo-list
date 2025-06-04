import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <main className="todo-list">
        <header>
          <h1>Todo List</h1>
        </header>
        <section className="todo-list-container">
          <TodoInput />
          <TodoList />
        </section>
      </main>
    </TodoProvider>
  );
}

export default App;
