import React from 'react'
import logo from './ScreenShot_Tool_-20240330130739.png'
import { Link } from 'react-router-dom'

const Navbar = ({handleSearch}) => {
 
  return (
    <div>
    <div className="container-fluid">
        <div className="row my-3 sticky-top navbars">
            <div className="col">
              <Link to="/">  <img src={logo} alt="Logo" width="80%" height="55px" /></Link>
            </div>
            <div className="pe-5 mt-3 col-12 col-md-6 col-lg-6 d-flex justify-content-end">
    <Link to="/" className="text-decoration-none text-white"><i>Home</i></Link>
    <Link to="/All" className="text-decoration-none text-white"><i>Movies</i></Link>
    <Link to="/All" className="text-decoration-none text-white"><i>Tv Shows</i></Link>
    <Link to="/Profile" className="text-decoration-none text-white"><i>Profile</i></Link>
</div>



        </div>
    </div>
</div>

  )
}

export default Navbar