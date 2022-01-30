import React from "react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Profile from "./profile/profile"
import ListUsers from "./Components/UsersList/userList"

import "../src/App.css"


function App() { 
    return (
      <Router>
      <div>
      <Routes>
        <Route path="/" element={<ListUsers/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      </div>
      </Router>
    )
}


export default App;
