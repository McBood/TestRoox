import React from "react"
import SortButton from "../Components/SortButtons/sortButton"
import styled from "styled-components"

import "./profile.scss"
import Field from "../Components/InfoFields/fields";

const ModifiedButton = styled(SortButton)`
padding: 6px 11px;
margin: 0;
position: absolute;
right: 0;
margin-right: 28px;
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
        <div className="info-block">
            <Field text="Name" placeholder="Иван Иванов"/>
            <Field text="User name" placeholder="Ivan"/>
            <Field text="E-mail" placeholder="example@mail.com"/>
            <Field text="Street" placeholder="ул. Пример"/>
            <Field text="City" placeholder="Москва"/>
            <Field text="Zip code" placeholder="1234234"/>
            <Field text="Phone" placeholder="89991112233"/>
            <Field text="Website" placeholder="www.example.com"/>
            <Field text="Comment" placeholder=""/>
        </div>
        </div>
        </div>
      
        )
}

export default Profile