import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const todos = [
    { id: 1, title: "one", completed: false },
    { id: 2, title: "two", completed: false },
  ];
  return (
    <div className="App">
      {todos.map((item, index) => {
        return <Todo todo={item} />;
      })}
    </div>
  );
}

export default App;
