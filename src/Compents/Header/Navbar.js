import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div className="container">
    <Link to={'/'} className="navbar-brand" >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link to={'/'} className="nav-link" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/about'} className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to={'/media'} className="nav-link" >Media</Link>
        </li>
        <li className="nav-item">
          <Link to={'/login'} className="nav-link" >Login</Link>
        </li>
        <li className="nav-item">
          <Link to={'/table'} className="nav-link" >USe Effect</Link>
        </li>
        

      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
