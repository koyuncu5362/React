import React, { useState } from 'react'

function Colors() {
    const [colors,setColors]=useState(["Red","Green","Blue"]);
  return (
    <div>
        {
        colors.map((color,id)=>(
        <div key={id}>
            {color}
        </div>
        ))}
        <button onClick={()=>{setColors([...colors,"gray"])}}></button>
        </div>
  )
}

export default Colors