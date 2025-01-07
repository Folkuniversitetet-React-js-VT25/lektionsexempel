import "./App.css";
import { useState } from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import AddTodo from "./components/AddTodo/AddTodo";

function App() {
  const heading = "Todo App";
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Köp kaffe",
      done: false,
    },
    {
      id: 2,
      text: "Köp kaka",
      done: true,
    },
    {
      id: 3,
      text: "Brygg kaffe",
      done: false,
    },
    {
      id: 4,
      text: "Drick kaffe",
      done: false,
    },
  ]);
  const [addedTodos, setAddedTodos] = useState(0);

  function updateTodos(todoText) {
    console.log("I updateTodos och skapar en todo med texten: ", todoText);

    const todo = {
      id: todos.length + 1,
      text: todoText,
      done: false,
    };

    // Detta är samma som exemplet nedan med prevState
    // const tempTodos = [...todos];
    // tempTodos.push(todo);

    setTodos((prevState) => {
      return [...prevState, todo];
    });

    setAddedTodos(addedTodos + 1);
  }

  const todoComponents = todos.map((todo) => {
    return <TodoItem text={todo.text} done={todo.done} key={todo.id} />;
  });

  return (
    <main className="App">
      <h1>{heading}</h1> {/** Allt inom {} tolkas som vanilla JS */}
      <ul>{todoComponents}</ul>
      <p>Antalet tillagda todos: {addedTodos}</p>
      <AddTodo updateTodos={updateTodos} />
    </main>
  );
}

export default App;
