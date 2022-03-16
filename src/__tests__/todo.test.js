import Todo from "../components/Todo";
const { render, screen } = require("@testing-library/react");

test("sample", () => {
  const todo = { id: 1, title: "one", completed: false };
  render(<Todo todo={todo} />);
  const todoElem = screen.getByTestId(`todo-${todo.id}`);
  expect(todoElem).toBeInTheDocument();
  expect(todoElem).toHaveTextContent(todo.title);
});
