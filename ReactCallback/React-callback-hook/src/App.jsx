import { useState ,useCallback} from 'react'
import ChildComponents from './Components/ChildComponents'
import ExpensiveComponents from'./Components/ExpensiveComponents'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  // // function handleClick(){
  // //   setCount(count+1);
  // // }

  // let handleClick=useCallback(()=>{
  //   setCount(count+1)
  // },[count]);

  return (
   <div>
      {/* <div>
        count:{count}
      </div>
       
       <div>
        <button onClick={handleClick}>Increment:</button>
       </div>

       <div>
        <ChildComponents
        buttonName="click Me"
        handleClick={handleClick}/>
       </div> */}

   <ExpensiveComponents/>

   </div>
  )
}

export default App
