import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="todo-list-container">
        <section className="todo-input">
          <TodoInput />
        </section>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
