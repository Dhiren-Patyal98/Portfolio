import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Dhiren Patyal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link active" aria-current="page" to="/Projectsss">Projects</Link>
        <Link class="nav-link active" aria-current="page" to="/ContactUs">Contact Us</Link>
        <Link class="nav-link active" aria-current="page" to="/Blog">Blog</Link>
      
      </div>
    </div>
  </div>
</nav>
      
    </>
  )
}
