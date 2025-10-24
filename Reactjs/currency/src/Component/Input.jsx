import {useId} from "react"
function Input({
  label,
  amount,
  amountChange,
  currencyChange,
 
  selectCurrency="usd",
  className,
  currencyOption=[]
}){
  const amountid=useId()
  return(
    <div className="flex justify-center items-center w-full m-auto">
     <div className="w-full ml-52">
      <div className=" w-1/2 gap-40  flex justify-center items-center">
        <label htmlFor={amountid} className="inline-block">{label}</label>
        <p>Currency type</p>
      </div>
       <div className=" w-1/2 gap-40  flex justify-center  items-center">
         <input id={amountid} type="text" className="outline-none inline-block "
         value={amount}
         onChange={(e)=>amountChange && amountChange(Number(e.target.value))}/>
         <select value={selectCurrency}
         onChange={(e)=>currencyChange && currencyChange(e.target.value)}>
         {
          currencyOption.map((paisa)=>(
            <option value={paisa} key={paisa}>
            {paisa}
           </option>
          )) 
         }
         </select>
       </div>
    </div>
    </div>
    )
}
export default Input