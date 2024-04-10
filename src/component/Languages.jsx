import React from 'react'

const Languages = () => {
    let lang=["JAVA","JAVASCRIPT",'KOTLIN',"PYTHON","C"];
  return (
    <div>
      <h1>Best Programming Languages:</h1>
      <ul>
        {lang.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Languages
