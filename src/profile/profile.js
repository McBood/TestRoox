import React from "react"
import SortButton from "../Components/SortButtons/sortButton"
import styled from "styled-components"

import "./profile.scss"

const ModifiedButton = styled(SortButton)`
padding: 6px 11px;
margin: 0;
position: absolute;
right: 0;
margin-right: 45px;
`;

const Profile = () => {
    return (   
        <div className='usersList'> 
        <div className='usersList__sidebar'>
        <span>Сортировка</span>
        <SortButton  text="по городу" />
        <SortButton  text="по компании"/>
        </div>
        <div className="usersList__lists">
        <div className="header">
        <h3 className="header__profile">Профиль пользователя</h3>
        <ModifiedButton text="Редактировать"></ModifiedButton>
        </div>
        </div>
        </div>
      
        )
}

export default Profile