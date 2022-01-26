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

  return (
    <div className='usersList'>
      <div className='usersList__sidebar'>
      <span>Сортировка</span>
      <SortButton text="по городу" />
      <SortButton text="по компании"/>
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
          <span>Найдено 10 пользователей</span>
        </div>
      </div>
    </div>
  );
}

export default App;
