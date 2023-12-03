//If we want the axios,We need the download axios with terminal(npm install axios)
import React,{useEffect,useState} from 'react'
import axios from 'axios';

function UserV4() {
    const [users,setUsers]= useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data))//we dont use json parse with axios
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

export default UserV4