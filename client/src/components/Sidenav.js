import React, { useState } from "react";
import { navData } from "./lib/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./sidenav.module.css"
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Sidenav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`sidenav ${isExpanded ? 'expanded' : ''}`}>
      <div className="toggle-button bg-gray-600 p-2" onClick={toggleSidebar}>
      <button className={styles.menuBtn} onClick={toggleSidebar}>
        {isExpanded? <KeyboardDoubleArrowLeftIcon />
        : <KeyboardDoubleArrowRightIcon />}
      </button>
      </div>
      {navData.map((item, index) =>(
         <div className='flex gap-3 mt-6 px-5 py-5 text-white bg-gray-200' key={index}>
            {item.icon}
              {isExpanded && <span className={styles.linkText}>{item.name}</span>}
         </div>
      ))}
    </div>
  )
}
export default Sidenav;