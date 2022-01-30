import React from "react"
import "./profile.scss"
import SortButton from "../Components/SortButtons/sortButton"

const Profile = () => {
    return (   
        <div className='usersList'> 
        <div className='usersList__sidebar'>
        <span>Сортировка</span>
        <SortButton  text="по городу" />
        <SortButton  text="по компании"/>
        </div>
        <div className="usersList__lists">
          <h3>Профиль пользователя</h3>
        </div>
        </div>
      
        )
}

export default Profile