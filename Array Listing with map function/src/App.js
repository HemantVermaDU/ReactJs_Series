import React from 'react'
import './App.css'
const App = () => {
  
  // const fruits = ['mango','Banana','apple','pineApple'];
   const students = [
    {id:1, name:"stud1", rollNo:"01", class:10,Subject:"PCM"},
    {id:2, name:"stud2", rollNo:"02", class:10,Subject:"PCM"},
    {id:3, name:"stud3", rollNo:"03", class:10,Subject:"PCM"},
    {id:4, name:"stud4", rollNo:"04", class:10,Subject:"PCB"}
   ]
   
    return(
      <div className='App'>
      <h3>Array Listing with map function</h3>
      <table>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Roll No</th>
        <th>Subject</th>
      </tr>
      {   
        //Map
        students.map((data,index) => 
       <tr key={index}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.rollNo}</td>
        <td>{data.Subject}</td>
       </tr>
    )
      }
      </table>
      </div>
  )
}
export default App;
