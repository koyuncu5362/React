import PropTypes from'prop-types';


function User({name,age}){
    // console.log(friends);
    return (
        <div>
            <div>{name} {age}</div>

        </div>
    )
}
User.propTypes={
    name :PropTypes.string.isRequired,
    age : PropTypes.number
}
// User.propTypes={
//     data : PropTypes.exact({
//     name :PropTypes.string.isRequired,
//     age : PropTypes.number
// }) // For First Commit 
// }


export default User