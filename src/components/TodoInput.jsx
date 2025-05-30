import { useState } from "react";

const TodoInput = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

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
