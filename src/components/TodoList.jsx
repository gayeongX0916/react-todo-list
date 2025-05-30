import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {
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
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
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
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
      </section>
    </>
  );
};

export default TodoList;
