import React from 'react'

const Info = (props) => {
    let {lang}=props;
  return (
    <div>
      <h1>Top Programming Language</h1>
      {lang.map((item,index)=>(<li key={index}>{item}</li>))}
    </div>
  )
}

export default Info
