import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./styles.css";

/*
  INSTRUCTIONS:
  Convert the code below from a Class component
  using setState to a function component using
  the useState Hook.
*/
function Theme() {
  const [theme, setTheme] = React.useState("light");
  const toDark = () => setTheme("dark");
  const toLight = () => setTheme("light");

  return (
    <div className={theme}>
      {theme === "light" ? (
        <button onClick={toDark}>ð¦</button>
      ) : (
        <button onClick={toLight}>ð¡</button>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Theme />);
