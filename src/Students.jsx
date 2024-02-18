function Students(props){
    return(
        <div className="student">
            <p>Name: {props.Name}</p>
            <p>Age: {props.Age}</p>
            <p>Student:{props.isStudents? "Yes":"No"}</p>
        </div>
    );
}
export default Students;