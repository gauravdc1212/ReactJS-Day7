import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // <div>
    //   <h1>Navbar</h1>
    //   <Link to='/' >Home</Link>
    //   <Link to='/card' >Card</Link>
    //   <NavLink to='/counter'>Counter</NavLink>
    //   <NavLink to='/lang'>Language</NavLink>
    // </div>
    <nav className="navbar navbar-expand-lg bg-warning ">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white fw-bold" to="/">KIET MCA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/card" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>Card</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/counter" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>Counter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/lang" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>Language</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/student" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>About US</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar
