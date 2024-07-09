import React from 'react'
import { Link,useLocation } from 'react-router-dom'
const Navbar=()=> {
  const location=useLocation();
    return (                                  
      <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/business"?'active':""}`} aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/entertainment"?'active':""}`} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/health"?'active':""}`} to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/science"?'active':""}`} to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/sports"?'active':""}`} to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/technology"?'active':""}`} to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
}
export default Navbar;