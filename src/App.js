import React, {useState} from "react"
import SortButton from "./Components/SortButtons/sortButton"
import useAsyncEffect from "use-async-effect"
import preloader from "./assets/preloader.svg"
import UserBlock from "./Components/UserBlock/UserBlock"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Profile from "./profile/profile"

import "../src/App.css"


function App() { 
    const [isLoaded,setIsLoaded] = useState(true)
    const [users,setUsers] = useState([])
  
    useAsyncEffect(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
      setIsLoaded(false)
      console.log(users)
    }, [])
  
      const count = Object.keys(users).length;
  
      function sortCity () {
        const sortedUsersByCity = [...users]
        sortedUsersByCity.sort((x,y) => {
          if(x.address.city < y.address.city) {return -1}
          if(x.address.city > y.address.city) {return 1}
          return 0
        })
        setUsers(sortedUsersByCity)
      }
  
      function sortCompany () {
        const sortedUsersByCompany = [...users]
        sortedUsersByCompany.sort((x,y) => {
          if(x.company.name < y.company.name) {return -1}
          if(x.company.name > y.company.name) {return 1}
          return 0
      })
      setUsers(sortedUsersByCompany)
    }
    console.log(users)
    return(
      <Router>
        <div className='usersList'>  
        <div className='usersList__sidebar'>
        <span>Сортировка</span>
        <SortButton button={sortCity} text="по городу" />
        <SortButton button={sortCompany} text="по компании"/>
        </div>
        <div className="usersList__lists">
          <h3>Список пользователей</h3>
          {isLoaded ? <img src={preloader} alt="preloader"/> : (
            <div className="usersList__items">
            {users.map(user => (
              <div className="usersList__userCard">
                <UserBlock
                  key={user.id}
                  name={user.name}
                  city={user.address.city}
                  company={user.company.name}/>
              </div>
            ))}
            <span>Найдено {count} пользователей</span>
          </div>)}
        </div>
      </div>
      <Routes>
        <Route path="/App" element={<App/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      </Router>
    )
}


export default App;
