import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor]=useState("black")
  

  return (
   
<div className="h-screen w-full" style={{backgroundColor:color}} >
  <h1 className="uppercase p-4">bgchanger</h1>
  <div className="flex justify-center items-center flex-wrap gap-4">
    <div ><button onClick={()=>setColor("red")} className="bg-red-400">Red</button></div>
     <div><button onClick={()=>setColor("blue")}  className="bg-blue-400">blue</button></div>
      <div><button onClick={()=>setColor("yellow")}  className="bg-yellow-400">yellow</button></div>
       <div><button onClick={()=>setColor("green")} className="bg-green-400">green</button></div>
  </div>
</div>
  )
}

export default App
