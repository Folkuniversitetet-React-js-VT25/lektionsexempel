import "./TodoItem.css";

function TodoItem(props) {
  const { text, done } = props; // Använder object destructuring för att plocka ut egenskaper från ett objekt

  return <li className={done ? "todo-item done" : "todo-item"}>{text}</li>;
}

export default TodoItem;
