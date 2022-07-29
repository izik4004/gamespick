import React from 'react'
import './sidebar.css'
import {MdDashboard} from "react-icons/md"
import {SidebarData} from "../../data/data"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* <div className='wrapper'> */}
       <div className="logo">
          <h1>Gamespick</h1>
       </div>
       <div className="menu">
          <div className="menuItem">
              <div>
                  <MdDashboard/>
              </div>
              <span>Dashboard</span>
          </div>
       </div>
       {/* <div className='sidebar-items'>
          <ul >
              {sidebarData.map((item, index) => {
                return (
                <li key={index} className="sidebar-item">
                
                      {item.icon}
                    <span>{item.name}</span>  
                    
                </li>
                )
            })}
          </ul>
       </div> */}
       {/* </div> */}
       <div className='leaderboard'>

       </div>
    </div>
  )
}

export default Sidebar
