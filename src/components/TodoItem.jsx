import { useEffect, useRef, useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const inputRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditCompleteClick = () => {
    if (newText.trim() === "") return;
    onEdit(todo.id, newText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditCompleteClick();
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      const input = inputRef.current;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }, [isEditing]);

  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          onChange={() => onToggle(todo.id)}
          checked={todo.done}
        />
        {isEditing ? (
          <input
            ref={inputRef}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="todo-text todo-text-input"
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span className={`todo-text ${todo.done ? "done" : ""}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="todo-button-container">
        {!todo.done && (
          <>
            {isEditing ? (
              <button onClick={handleEditCompleteClick}>완료</button>
            ) : (
              <button onClick={handleEditClick}>수정</button>
            )}
          </>
        )}
        <button onClick={() => onDelete(todo.id)}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
