import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Sidenav from '../Sidenav';


function Layout() {
  return (
    <div className="app-container flex">
      <Sidenav />
      <div className="main-content flex-grow">
        <Navbar />
          <div className='bg-gray-100 min-h-[80vh]'>
              <Outlet />
          </div>
      </div>
    </div>
   )
 }

export default Layout;