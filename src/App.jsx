import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="todo-list">
        <h1>Todo List</h1>
        <div className="todo-list-container">
          <section className="todo-input">
            <TodoInput />
          </section>
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
