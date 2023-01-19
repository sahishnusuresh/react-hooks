import React from "react"
import ReactDOM from "react-dom/client"

import "./styles.css"

/*
  Instructions:
    You're given a `useWindowDimensions` custom Hook. Your
    job is to finish implementing it. It should return
    an object with a `width` property that represents the current
    width of the window and a `height` property which represents
    the current height.

    To get those values, you can use teh `window.addEventListener`
    API.https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
*/

function useWindowDimensions() {
  const [width,setWidth]=React.useState(window.innerWidth)
  const [height,setHeight]=React.useState(window.innerHeight)

  //This will not change height and width when window size changes 
  //as event listeners arent added
  // React.useEffect(()=>setWidth(window.innerWidth),[width])
  // React.useEffect(()=>setHeight(window.innerHeight),[height])
  const event=()=>{
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  window.addEventListener('resize',event)
  
  return {width,height}
  
}


function App() {
  const { width, height } = useWindowDimensions()

  return (
    <div className="App">
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      <p>Resize the window.</p>
    </div>
  )
}

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)
