import React, {useState} from "react"
import SortButton from './Components/SortButtons/sortButton';
import useAsyncEffect from "use-async-effect";
import './App.css';

import UserBlock from "./Components/UserBlock/UserBlock";

function App() {
  const [users,setUsers] = useState([])

  useAsyncEffect(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    setUsers(data)
    }, [])
    console.log(users)

    const count = Object.keys(users).length;

    function sortCity () {
      users.sort((x,y) => {
        if(x.address.city < y.address.city) {return -1}
        if(x.address.city > y.address.city) {return 1}
        return 0
      })
    }

    function sortCompany () {
      users.sort((x,y) => {
        if(x.company.name < y.company.name) {return -1}
        if(x.company.name > y.company.name) {return 1}
        return 0
    })
  }
  console.log(users)

  return (
    <div className='usersList'>
      <div className='usersList__sidebar'>
      <span>Сортировка</span>
      <SortButton onclick={sortCity} text="по городу" />
      <SortButton onclick={sortCompany} text="по компании"/>
      </div>
      <div className="usersList__lists">
        <h3>Список пользователей</h3>
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
        </div>
      </div>
    </div>
  );
}


export default App;
