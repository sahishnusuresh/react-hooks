import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

function Wait ({ delay = 1000, placeholder, ui }) {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(true)
    }, delay)

    return () => window.clearTimeout(id)
  }, [delay])

  return show === true
    ? ui
    : placeholder
}

function App() {
  return (
    <div className="App">
      <Wait
        delay={4000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 4 seconds.</p>}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

