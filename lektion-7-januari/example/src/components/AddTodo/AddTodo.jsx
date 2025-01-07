import { useState } from "react";

function AddTodo(props) {
  const [todoText, setTodoText] = useState({
    text: "",
    username: "",
    id: 0,
  });

  const { updateTodos } = props;

  function handleInput(event) {
    //setTodoText(event.target.value);
    const { name, value } = event.target;

    console.log(`Uppdaterar ${name} med värdet ${value}`);

    setTodoText((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleClick() {
    console.log(todoText);
    updateTodos(todoText.text);
  }

  return (
    <section>
      <input
        type="text"
        name="text"
        placeholder="Ny todo"
        onKeyUp={handleInput}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        onKeyUp={handleInput}
      />
      <input type="number" name="id" placeholder="id" onKeyUp={handleInput} />
      <button onClick={handleClick}>Lägg till todo</button>
    </section>
  );
}

export default AddTodo;
