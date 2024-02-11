import React, { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo";
import { Todos } from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/todos");
      const json = await res.json();
      setTodos(json.todos);
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
