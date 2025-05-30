import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (value) => {
    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="todo-list-container">
        <section className="todo-input">
          <TodoInput handleAddTodo={handleAddTodo} />
        </section>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
