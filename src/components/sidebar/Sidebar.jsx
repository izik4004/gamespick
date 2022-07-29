import {useState} from 'react'
import './sidebar.css'
import {MdDashboard} from "react-icons/md"
import {SidebarData} from "../../data/Data"
import { Link } from "react-router-dom"



const Sidebar = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div className='sidebar'>
      {/* <div className='wrapper'> */}
       <div className="logo">
          <h1>Gamespick</h1>
       </div>
       <div className="menu">
           {SidebarData.map((item, index) => {
                return (
                <div 
                key={index} 
                className={selected===index?'menuItem active':'menuItem'}
                onClick={() => setSelected(index)}
                >
                      {item.icon}
                    <span>{item.name}</span>  
                    
                </div>
                )
              })}
         
       </div>
       <div className='leaderboard'>

       </div>
    </div>
  )
}

export default Sidebar
