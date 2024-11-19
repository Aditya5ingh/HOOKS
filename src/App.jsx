import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("../New Folder/todo.json").then(async function (res) {
      const json = await res.json();
      setTodos(json.todo);
    });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} id={todo.id} />
      ))}
    </>
  );
}
function Todo({ title, description, id }) {
  return (
    <>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </>
  );
}

export default App;
