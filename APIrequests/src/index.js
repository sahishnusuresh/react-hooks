import { resetWarningCache } from "prop-types";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];


function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
}

function App() {
  const[id,setId]=React.useState(0)
  const [loading,setLoading]=React.useState(true)
  const[error,setError]=React.useState(null)
  const[post,setPost]=React.useState(true)
  
  React.useEffect(()=>{
  setLoading(true)
  fetchPost(postIds[id])
  .then((post)=>{
  setPost(post)
  setError(null)
  setLoading(false)
}).catch((e)=>{
  setError("Error")
  setLoading(true)
})
 } ,[id])
  const incrementid=()=>{
    setId((id)=>
    (id===postIds.length-1)?id:id+1
    )
  }
  if(loading===true)
    return <h1>Loading</h1>
  if(error)
    return <h2>An error has occurred</h2>
  

  return <div className="App">
 
  <h1>{post.id}</h1>
    <h2>{post.title}</h2>
   {id===postIds.length-1?(<h2>No more posts</h2>):
    (<button onClick={incrementid}>Next post</button>)}
    
    </div>
    
}
    

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />)