import { Github } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import '../../App.css'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/register">Register</NavLink></li>
  <li><NavLink to="/login">Login</NavLink></li>
 
      </ul>
    </div>
        <NavLink to="/" className="flex items-center gap-2">
        {/* Access public folder directly with /filename */}
        <img src="/logo.png" alt="STAR.IO Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-[white]">STAR.IO</span>
      </NavLink>

  </div>
  <div className="navbar-center ">
    
<ul className="menu menu-horizontal px-1 hidden lg:flex">
  <li><NavLink to="/">Home</NavLink></li>
 <li><NavLink to="/register">Register</NavLink></li>
  <li><NavLink to="/login">Login</NavLink></li>
</ul>
  </div>
  <div className="navbar-end">



    <NavLink to='https://github.com/itstumpa/firebase_Email_Google_Auth' className="btn bg-[#5754E8] px-6 hover:bg-[#4f4cf4] "><Github />Github</NavLink>
  </div>
</div>
  )
}

export default Navbar
