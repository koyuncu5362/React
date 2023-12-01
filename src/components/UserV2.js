import React,{useState} from 'react'

function UserV2() {
    const [user,setUser]=useState({name:"Metin",surname:"Koyuncu"});
  return (
    <div>
        {user.name}{user.surname}
        <button onClick={()=>setUser({...user,name:"Mahmut"})}>Change Name</button> 
        {/* ...user is protect user object after that change if you want to any change object props */}
        <button onClick={()=>setUser({...user,surname:"Kaya"})}>Change Surname</button> 
    </div>
  )
}

export default UserV2