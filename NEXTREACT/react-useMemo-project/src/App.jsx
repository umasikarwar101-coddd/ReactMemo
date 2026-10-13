import { useState ,input,useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[input,setInput]=useState(0)  // time toh abhi bhi lag rha tha isliye isse bachaoge 
  function expensiveTask(num){
    console.log("expensive task")
    for(let i=0;i<=100000000;i++){} //dummy hae so isko expensive ho gya time zyada time nhin chlega
    return num*2;
    
  }

  useMemo(()=>expensiveTask,[input])

  let doubleValue=expensiveTask(input);
  
  return (
   <div>
    <button onClick={()=>setCount(count+1)}>Increment</button>
     <div>
      count:{count}
     </div>
     <div>
      Double:{doubleValue}
     </div>

     <input 
     type='number'
     placeholder='enternumber'
     value={input}
     onChange={(e)=>setInput(e.target.value)}/>
   </div>
             
  )
}

export default App
