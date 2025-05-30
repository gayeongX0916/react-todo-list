import { TodoStateContext } from "./TodoStateContext";
import { TodoActionContext } from "./TodoActionContext";
import { useCallback, useEffect, useMemo, useState } from "react";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddTodo = useCallback((value) => {
    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const handleEditTodo = useCallback((id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const actions = useMemo(
    () => ({ handleAddTodo, handleToggle, handleEditTodo, handleDeleteTodo }),
    [handleAddTodo, handleToggle, handleEditTodo, handleDeleteTodo]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoActionContext.Provider value={actions}>
        {children}
      </TodoActionContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;
