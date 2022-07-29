// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dasboard from "./components/dashboard/Dasboard"
import Navbar from "./components/nav/Navbar"

import Sidebar from "./components/sidebar/Sidebar"


function App() {
  // const [count, setCount] = useState(0)

  return (
   
      <div className="App">
        {/* <Router> */}
          <div className="App-container">
           
            <Sidebar/>
            <Dasboard/>
            
          </div>
          {/* <Routes>
            <Route>
              <Navbar/>
            </Route>
          </Routes>
          </Router> */}
          
 
     </div>
    
  )
}

export default App
