import { useState } from "react"

function App() {
 const [counter, setCounter] = useState(35)

  //let counter = 35
 
 const addValue =() =>{
  console.log("clicked", counter)
  //counter = counter + 1

  setCounter(counter+1)
 }

 const subtractValue =() => {
  setCounter(counter -1)
 }

  return (
    <>
<h1> counter with Reed monkey</h1>
<h2> Counter value: {counter}</h2>

<button onClick={addValue}>Add value</button>
<br/>
<br/>
<button onClick={subtractValue}>Subtract value</button>
</>
  )
}

export default App
