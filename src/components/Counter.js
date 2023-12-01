import React,{useState,useEffect} from 'react' 
//for using state

function Counter() {
    const [count,setCount]=useState(0);//default value 0 
    //setcount my func
    const [value,setValue]=useState(1);

    useEffect(()=>{
        console.log("Changed Any State");
    });
    useEffect(()=>{
        console.log("Changed Count State");
    },[count]);
    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(prev=>prev+value)}>
            Count++
        </button>
        <hr></hr>
        <button onClick={()=>setValue(1)}></button>
    </div>
  )
}

export default Counter