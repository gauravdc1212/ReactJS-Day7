import { useState } from "react"
import { useParams } from "react-router-dom";

const Student = () => {
    const param = useParams();
    // const {name} =param;
    const[studentInfo,setStudentInfo]=useState([
  {sid:"1",sname:"student1",marks:"75%"},
  {sid:"2",sname:"student2",marks:"70%"},
  {sid:"3",sname:"student3",marks:"85%"},
  {sid:"4",sname:"student4",marks:"95%"}
    ]);

  return (
    <div>
      {
      param.name?JSON.stringify(studentInfo.find((student)=>student.sname===param.name)):JSON.stringify(studentInfo)
      }
       {/* <h1>Student name is {name}</h1> */}
    </div>
  )
}

export default Student