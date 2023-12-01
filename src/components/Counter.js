import React,{useState} from 'react' 
//for using state

function Counter() {
    const [count,setCount]=useState(0);//default value 0 
    //setcount my func
    const [value,setValue]=useState(1);
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count + value)}>
            Count++
        </button>
        <hr></hr>
        <button onClick={()=>setValue(1)}></button>
    </div>
  )
}

export default Counter