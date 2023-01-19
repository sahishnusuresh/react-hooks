import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function useWait(delay) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    const id = window.setTimeout(() => {
      setValue(true);
    }, delay);

    return () => window.clearTimeout(id);
  }, [delay]);

  return value;
}

function Wait({ delay = 1000, placeholder, ui }) {
  const show = useWait(delay);

  return show === true ? ui : placeholder;
}

function App() {
  return (
    <div className="App">
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

