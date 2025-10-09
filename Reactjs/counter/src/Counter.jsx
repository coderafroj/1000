import {useState} from 'react'
function Counter(){
  let [x,setX]=useState(0)
  const add=()=>{
    setX(x=x+1)
  }
  const remove=()=>{
    setX(x=x-1)
  }
  return(
    <div>
      <h1>Counter project</h1>
      <div>Counter: {x}</div>
      <button onClick={add}>add</button><br/>
       <button onClick={remove}>remove</button>
    </div>
    )
}
export default Counter