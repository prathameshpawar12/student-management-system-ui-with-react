import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    



<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to={"/"}>Home</Link>
    <form className="d-flex">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
          <Link className="btn btn-outline-success  text-white" to={"/add-student"}>Add New Student</Link>

       </li>
    </ul>
    </form>
  </div>
</nav> 
   

  )
}

export default Navbar
       