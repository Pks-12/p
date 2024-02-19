function Students(props){
    return(
        <div className="student">
            <p>Name: {props.Name}</p>
            <p>Age: {props.Age}</p>
            <p>Student:{props.isStudents? "Yes":"No"}</p>
        </div>
    );
    //props-> means property that used for key value pair
}
export default Students;