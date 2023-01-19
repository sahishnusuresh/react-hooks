import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  Instructions:
    You're given the UI for a basic form. Your task is to
    hook it all up using refs.

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to
    empty strings.
*/

function Form() {
  const name=React.useRef("")
  const email=React.useRef("")
  const pwd=React.useRef("")

  const handleSubmit = e => {
    e.preventDefault()
    const name1=name.current.value
    const email1=email.current.value
    const pwd1=pwd.current.value
    console.log(name1,email1,pwd1)
  }

  const handleReset = () => {
      name.current.value=""
      email.current.value=""
      pwd.current.value=""
  }

  return (
    <React.Fragment>
      <label>
        Name:
        <input
          placeholder="name"
          type="text"
          ref={name}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="email"
          type="text"
          ref={email}
        />
      </label>
      <label>
        Password:
        <input
          placeholder="password"
          type="text"
          ref={pwd}
        />
      </label>

      <hr />

      <button onClick={()=>{name.current.focus()}}>
        Focus Name Input
      </button>
      <button onClick={()=>{email.current.focus()}}>
        Focus Email Input
      </button>
      <button onClick={()=>{pwd.current.focus()}}>
        Focus Password Input
      </button>

      <hr />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </React.Fragment>
  )
}
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Form />);
