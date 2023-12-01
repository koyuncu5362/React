import React,{useState} from 'react'

function Form() {
    const [name,setName]=useState("Met,n");
    const [form,setForm]=useState({name:"Metin"}) //This is a object 
  return (
    <div>
        <div>
            Name
            <input value={form.name} onChange={(event)=>setName(event.target.value) }></input>
            Surname
            <input></input>
        </div>
    </div>
  )
}

export default Form