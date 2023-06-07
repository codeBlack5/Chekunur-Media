import React from 'react'
import {MdAccountBalance} from "react-icons/md"
import { Link } from 'react-router-dom';
import logoImage from '../../components/images/aic.png';


const Navbar = () => {
  return (
    <nav className="navbar bg-sky-200 text-white p-2">
      {/* Logo and navigation links */}
      <div className="flex items-center justify-between px-3 py-1">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl">
          <img src={logoImage} alt="Logo" className="h-10 w-10" />
        </Link>
        {/* Tithe icon */}
        <div className="flex items-center">
          {/* Add any other navigation links if needed */}
          <Link to="/tithe" className="nav-link ml-4">
            <span className="icon"><MdAccountBalance className="h-10 w-10"/></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar