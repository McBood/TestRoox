import React, {useState} from "react"
import useAsyncEffect from "use-async-effect"
import SortButton from "../SortButtons/sortButton"
import UserBlock from "../UserBlock/UserBlock"
import preloader from "../../assets/preloader.svg"

import "../../index.scss"


const ListUsers = () => {
    const [isLoaded,setIsLoaded] = useState(true)
    const [users,setUsers] = useState([])
  
    useAsyncEffect(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
      setIsLoaded(false)
    }, [])
  
      const count = Object.keys(users).length;
  
      function sortCity () {
        setIsLoaded(true)
        const sortedUsersByCity = [...users]
        sortedUsersByCity.sort((x,y) => {
          if(x.address.city < y.address.city) {return -1}
          if(x.address.city > y.address.city) {return 1}
          return 0
        })
        setUsers(sortedUsersByCity)
        setIsLoaded(false)
      }
  
      function sortCompany () {
        setIsLoaded(true)
        const sortedUsersByCompany = [...users]
        sortedUsersByCompany.sort((x,y) => {
          if(x.company.name < y.company.name) {return -1}
          if(x.company.name > y.company.name) {return 1}
          return 0
      })
      setUsers(sortedUsersByCompany)
      setIsLoaded(false)
    }
    return (
        <div className='usersList'> 
        <div className='usersList__sidebar'>
        <span>Сортировка</span>
        <SortButton button={sortCity} text="по городу" />
        <SortButton button={sortCompany} text="по компании"/>
        </div>
        <div className="usersList__lists">
          <h3 className="main-header">Список пользователей</h3>
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
            <span className="counter">Найдено {count} пользователей</span>
          </div>)}
        </div>
      </div>
    )
}

export default ListUsers