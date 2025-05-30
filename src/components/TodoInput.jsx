import { useState } from "react";
import { useTodoActionState } from "../context/TodoActionContext";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const { handleAddTodo } = useTodoActionState();

  const handleonClick = () => {
    if (value.trim() === "") return;
    handleAddTodo(value);
    setValue("");
  };

  const handleonKeyDown = (e) => {
    if (e.key === "Enter") {
      handleonClick();
    }
  };

  return (
    <>
      <input
        placeholder="할 일을 입력해주세요."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleonKeyDown}
      />
      <button onClick={handleonClick}>추가</button>
    </>
  );
};

export default TodoInput;
