import { createContext, useContext } from "react";

export const TodoActionContext = createContext();

export const useTodoActionState = () => {
  const context = useContext(TodoActionContext);
  if (!context) {
    throw new Error("프로바이더 생성");
  }
  return context;
};
