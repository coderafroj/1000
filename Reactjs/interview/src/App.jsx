import { useState } from 'react'

import './App.css'

function App() {
  const [x, setX] = useState(0)
  const add=()=>{
    setX(p=>p+1)
    setX(p=>p+1)
     setX(p=>p+1)
    setX(p=>p+1)
  }
   const remove=()=>{
    setX(p=>p-1)
  }

  return (
    <>
  <div>
    Counter interview 
  </div>
  <div>Counter:{x}</div>
  <button onClick={add}>Add</button><br/><br/>
   <button onClick={remove}>Remove</button>
  
  </>
  )
}

export default App
