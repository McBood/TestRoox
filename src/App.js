import React from "react"
import SortButton from './Components/SortButtons/sortButton';
import './App.css';

import DB from "./assets/DB.json"
import UserBlock from "./Components/UserBlock/UserBlock";
let obj = JSON.parse(DB)

function App() {
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
          <UserBlock props={obj}/>
        </div>
      </div>
    </div>
  );
}

export default App;
