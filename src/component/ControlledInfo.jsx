import React from 'react'
import Info from './Info'

const ControlledInfo = () => {
    let language=["Javascript","C++","C","Java"]
  return (
    <div>
      <Info lang={language}/>
    </div>
  )
}

export default ControlledInfo
