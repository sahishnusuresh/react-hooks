import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/
function generateId() {
  return Math.random();
}
function Todo() {
  const [todo, todos] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleSubmit = () => {
    todos((todo) =>
      todo.concat({
        id: generateId(),
        text: text
      })
    );
    setText("");
  };
  const removetodo = (id) =>
    todos((todo) => {
      todo.filter((t) => t.id !== id);
    });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="new todo"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {todo.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removetodo(id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Todo />);
