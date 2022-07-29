import React from 'react'
import './sidebar.css'
import {sidebarData} from "../../data/data"
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
      <div className='wrapper'>
       <div className="logo">
          <h1>Gamespick</h1>
       </div>
       <div>
          <ul >
              {sidebarData.map((item, index) => {
                return (
                <li key={index} className="sidebar-item">
                   <Link to="">
                      {item.icon}
                    <span>{item.name}</span>  
                    </Link>
                </li>
                )
            })}
          </ul>
       </div>
       </div>
    </div>
  )
}

export default Sidebar
