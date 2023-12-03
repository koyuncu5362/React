import React,{useEffect,useState} from 'react'

function UserV3() {
    const [users,setUsers]= useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))//data = res.json()
        .finally(setLoading(false))
    },[]);
  return (
    <div>
        {loading && <div>Loading</div>}
        <ul>
            {users.map((data)=>(
                <li>{data.name}</li>
            ))}
            
        </ul>

    </div>
  )
}

export default UserV3