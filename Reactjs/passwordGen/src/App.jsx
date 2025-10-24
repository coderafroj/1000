import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [char,setChar]=useState(false)
  const [num,setNum]=useState(false)
  const [password,setPassword]=useState("")
  const passwordGen=useCallback(
    ()=>{
     let word="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
  let makePass=""
  if(char)word+="()@#₹&=%+?!/:*:"
  if(num)word+="1234567890" 
  for(let i=0;i<length;i++){
    let index=Math.floor(Math.random()*word.length+1)
    makePass+=word.charAt(index)
  } 
  setPassword(makePass)
    },[length,char,num]
    )
    useEffect(()=>{
      passwordGen()
    },[length,char,num])
    
    const ref=useRef(null)

const copyBtn=useCallback(()=>{
   ref.current?.select()
  ref.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(password)
})
  return(
 <div className="w-full grid place-content-center h-screen">
   <h1>Password Generator</h1>
   <div className=" w-full flex justify-center items center">
    <div >
     <input 
     readOnly
     ref={ref}
     value={password}
     className="px-4 py-2 rounded-l-md" type="text"/>
   </div>
    <div>
     <button onClick={copyBtn} className="px-4 py-2 rounded-r-md">copy</button>
   </div>
 </div>
 <div className=" w-full flex justify-center items center gap-3">
   <div><input
    min={8}
    max={50}
    value={length}
    onChange={(e)=>{setLength(e.target.value)}}
   type="range"/><lebel>length:{length}</lebel></div>
     <div><input
     onChange={(e)=>{setChar(prev=>!prev)}}
     type="checkbox"/><label>Char</label></div>
       <div><input 
       onChange={(e)=>{setNum(prev=>!prev)}}
       type="checkbox"/><label>Num</label></div>
 </div>
  </div>
  )
}

export default App
