import { useTodoActionState } from "../context/TodoActionContext";
import { useTodoState } from "../context/TodoStateContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoState();
  const { handleToggle, handleEditTodo, handleDeleteTodo } =
    useTodoActionState();

  const renderTodoList = (title, items) => (
    <section>
      <h2 className="todo-title">{title}</h2>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />
      ))}
    </section>
  );
  return (
    <>
      {renderTodoList(
        "할 일",
        todos.filter((todo) => !todo.done)
      )}
      {renderTodoList(
        "완료된 항목",
        todos.filter((todo) => todo.done)
      )}
    </>
  );
};

export default TodoList;
