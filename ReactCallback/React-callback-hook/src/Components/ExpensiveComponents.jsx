import React ,{useState,useCallback,useEffect,useRef}from 'react';


const ExpensiveComponents = () => {
  const [count, setCount] = useState(0);
  const[text,setText]=useState("")  ;
  const previousFunction =useRef(null);
const expensiveCalculation=useCallback(()=>{
    let result=0;
    console.log("expensive task")
    for(let i=0;i<=100000000;i++){
        result+=i;
    }
   return result;
  },[count]);
  
  useEffect(()=>{
    if(previousFunction.current){
      if(previousFunction.current==expensiveCalculation){
        console.log("function can not recreated")
      }
      else{
        console.log("function got recreated")
      }
    }
    else{
       previousFunction.current=expensiveCalculation;
       console.log("function got recreated");
    }
  },[expensiveCalculation])
  
  return (
   <div>
     <input 
     type='text'
     placeholder='type a message'
     value={text}
     onChange={(e)=>setText(e.target.value)}/>
  
   <p>Expensive Calculation Result:{expensiveCalculation()}</p>

   <button onClick={()=>setCount(count+1)}>Increment Count</button>
              </div>
  )
}

export default ExpensiveComponents
g