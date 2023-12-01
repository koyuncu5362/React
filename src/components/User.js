function User({data,friends}){

  
    console.log(friends);
    return (
        <div>
            <div name="Metin" age="22"></div>
            <h1>{data.name} {data.age}</h1>
            <div>
                {friends.map((friend,id)=>(
                    <div key={id}>{friend}</div>
                    ))}
            </div>
        </div>
    )
}
export default User