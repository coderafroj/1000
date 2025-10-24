import {useState,useEffect} from "react"
import Input from "./Component/Input.jsx"
import useCurrency from "./useCurrency"
function App() {
  const [amount,setAmount]=useState(0)
  const [to,setTo]=useState("usd")
  const [from,setFrom]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrency(from)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  
  }
 
   const convert = () => {
  
      setConvertedAmount(amount * currencyInfo[to])
    
  }
  
 

  return (
  <div>
    <div>
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}>
          <div>
            <Input label="from"
            amount={amount}
            currencyChange={(currency)=>{
              setFrom(currency)
            }}
            amountChange={(amount)=>{
              setAmount(amount)
            }}
            selectCurrency={from}
            currencyOption={options}/>
            
          </div>
          <div>
            <button type="button" onClick={swap}>swap</button>
          </div>
          <div>
            <Input label="To"
            amount={convertedAmount}
            readOnly
              selectCurrency={to}
              currencyOption={options}
              currencyChange={(currency)=>{
                setTo(currency)
              }}/>
            
          </div>
          <button type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default App
