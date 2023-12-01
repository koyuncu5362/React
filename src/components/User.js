import PropTypes from'prop-types';


function User({title,name,age}){
    // console.log(friends);
    return (
        <div>
            <h1>{title}</h1>
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
User.defaultProps={
    title:"It's a header."
}

export default User