import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Home = () => {
  return (
    
    <div>
        <header>
        <nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" href="#">Navbar</Link>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active text-light" aria-current="page" href="#">Home</Link>
        <Link to="/register" className="nav-link text-light" href="#">Register</Link>
        <Link to="/display" className="nav-link text-light" href="#">Display</Link>
     
      </div>
    </div>
  </div>
</nav>
</header>
<div id='body'></div>



    </div>
  )
}

export default Home