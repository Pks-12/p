
function Greeting(props){

    return(props.isLoggedIn ? <h2 className="Weclome-message">Welcome to {props.username}</h2>:
                              <h2 className="Login-propmt">Loggd in to page</h2>);
}
export default Greeting
//ifelse
// if(props.isLoggedIn){
//     return <h2>Welcome to {props.username}</h2>
// }
// return <h2>Please logged in</h2>