import { createContext, useContext } from "react";

export const TodoStateContext = createContext();

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("프로바이더 생성");
  }
  return context;
};
