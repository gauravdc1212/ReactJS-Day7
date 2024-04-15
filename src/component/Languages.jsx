import React from 'react'

const Languages = () => {
    let lang=[{id:1,name:"JAVA"},{id:2,name:"JAVASCRIPT"},{id:3,name:'KOTLIN'},{id:4,name:"PYTHON"},{id:5,name:"C"}];
    var check=true;
  return (
    <div>
      <h1 className='{check?"bg-warning:"bg-success"}'>
        {check?"Best Programming Languages:":"Top 5 Programming Languages"}</h1>
      <ul>
        {lang.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    
    </div>
  )
}

export default Languages
