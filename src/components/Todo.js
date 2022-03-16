import React from "react";

export default function Todo({ todo }) {
  return <h1 data-testid={`todo-${todo.id}`}>{todo.title}</h1>;
}
