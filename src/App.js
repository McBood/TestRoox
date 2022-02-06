import React, {useState} from "react"
import Profile from "./profile/profile"
import ListUsers from "./Components/UsersList/userList"
import useAsyncEffect from "use-async-effect"
import preloader from "../src/assets/preloader.svg"

import "../src/App.css"


function App() { 
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [users,setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(users)

  useAsyncEffect(async () => {
      setLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
      setLoading(false)
    }, [])
    
    const onUserClick = (userId) => {
      setSelectedUserId(userId)
      console.log(selectedUserId)
    }

    if(loading) {
      return <img src={preloader} alt="preloader"/>
    }

    return (
      <div>
      { !selectedUserId ? <ListUsers users={users} onUserClick={onUserClick} /> : <Profile user={users.find(u => u.id === selectedUserId)} />
      }
      </div>
    )
}


export default App;
