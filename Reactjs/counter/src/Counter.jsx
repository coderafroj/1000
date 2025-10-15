import {useState} from 'react'
function Counter(){
  let [x,setX]=useState(0)
  const add=()=>{
    if(x<21){
      setX(x=>x+1)
    }
    
  }
  const remove=()=>{
    if(x>0){
      setX(x=>x-1)
    }
    
  }
  return(
    <div>
      <h1>Counter project</h1>
      <div>Counter: {x<=20?x:"Na babua na "}</div>
      <button onClick={add}>add</button><br/>
       <button onClick={remove}>remove</button>
    </div>
    )
}
export default Counter