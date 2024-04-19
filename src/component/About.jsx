import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const goRoute=()=>{
      navigate('/');
    }
  return (
    <div className='container'>
      <h1>This is an Example of React Router Dom</h1>
      <button onClick={goRoute} className='btn btn-primary'>Home</button>
    </div>
  )
}

export default About
