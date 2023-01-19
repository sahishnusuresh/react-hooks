import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds.

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/

function CounterGame () {
  const [count,setCount]=React.useState(0)
  const [timeleft,setTime]=React.useState(10)
  const id=React.useRef(null)
  const clear=()=>{window.clearInterval(id.current)}
  React.useEffect(()=>{
    id.current=window.setInterval(()=>
      setTime((t)=>t-1),1000)
      return clear
  },[])
  React.useEffect(() => {
    if (timeleft === 0) {
      clear()
    }
  }, [timeleft])
  return (
    <div className="App">
      <h2>{count}</h2>
      <h2>Timeleft is {timeleft} seconds</h2>
      {(timeleft===0)?null:(
      <button onClick={()=>setCount((c)=>c+1)}>Click here</button>)}
      
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<CounterGame />);

