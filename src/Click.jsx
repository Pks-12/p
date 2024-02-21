
function Click(){
    // const handleClick = (e) => e.target.textContent="Hi";
    let count=0;
    const handleClick=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked  ${count} time/s`);
        }
            else{
                console.log(`${name} stop clicking mother fucker!`);
            }
        
    };
    return(<button onClick={()=>handleClick("Yash")}>Click Me</button>);

}
export default Click