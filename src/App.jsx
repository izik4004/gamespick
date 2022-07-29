// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Sidebar from "./components/sidebar/Sidebar"


function App() {
  // const [count, setCount] = useState(0)

  return (
   
      <div className="container">
        <Router>
        <Sidebar/>
          <Routes>
            <Route></Route>
          </Routes>
          </Router>
 
     </div>
    
  )
}

export default App
