import Todo from "../components/Todo";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

test("sample", () => {
  const todo = { id: 1, title: "one", completed: false };
  render(<Todo todo={todo} />);
  const todoElem = screen.getByTestId(`todo-${todo.id}`);
  expect(todoElem).toBeInTheDocument();
  expect(todoElem).toHaveTextContent(todo.title);
});

test("match snap", () => {
  const todo = { id: 1, title: "one", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
