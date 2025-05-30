import { useTodoActionState } from "../context/TodoActionContext";
import { useTodoState } from "../context/TodoStateContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoState();
  const { handleToggle, handleEditTodo, handleDeleteTodo } =
    useTodoActionState();
  return (
    <>
      <section className="todo-list-item">
        <div className="todo-title">할 일</div>
        {todos
          .filter((todo) => !todo.done)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
      </section>
      <section className="todo-check">
        <div className="todo-title">완료된 항목</div>
        {todos
          .filter((todo) => todo.done)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
      </section>
    </>
  );
};

export default TodoList;
