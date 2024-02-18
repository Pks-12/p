import Students from "./Students.jsx";
function App() {
  return (
    <>
      <Students Name="David" Age={25} isStudents={true}/>
      <Students Name="Abc" Age={42} isStudents={false}/>
      <Students Name="Rohan" Age={52} isStudents={true}/>
      <Students Name="Tim" Age={20} isStudents={true}/>
    </>
    );
  }
  
  export default App;
  
  {/* <First/>
  <Header/>
<Food/> */}
// import First from './First.jsx'
// import Header from './Header.jsx'
// import Food from './Food.jsx'
// <>
//     <Cards/>
//     <Cards/>
//     <Cards/>
//     <Cards/>
//     <Cards/>
//     <Cards/>
//     <Cards/>
//     <Cards/>
//     <Cards/>
// </>