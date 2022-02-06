import React, {useState} from "react"
import SortButton from "../Components/SortButtons/sortButton"
import styled from "styled-components"


import "./profile.scss"
import Field from "../Components/InfoFields/fields";
import SendButton from "../Components/SendButton/sendButton";

const ModifiedButton = styled(SortButton)`
padding: 6px 11px;
margin: 0;
position: absolute;
right: 0;
margin-right: 28px;
`;

const Profile = ({user}) => {

    const [isReadOnly,setIsReadOnly] = useState(true)

    var readBull = isReadOnly

    function readOnly () {
        const el = document.getElementsByClassName("sendBut")[0]
        const newReadBull = readBull
        newReadBull ? readBull = false : readBull = true
        setIsReadOnly(readBull)
        if(!isReadOnly === false) {
            el.style.background = "green"
        } else {
            el.style.background = "#AFAFAF"
        }
    }

    return (   
        <div className='usersList'> 
        <div className='usersList__sidebar'>
        <span>Сортировка</span>
        <SortButton dis="disabled" text="по городу" />
        <SortButton dis="disabled" text="по компании"/>
        </div>
        <div className="usersList__lists">
        <div className="header">
        <h3 className="header__profile">Профиль пользователя</h3>
        <ModifiedButton  button={readOnly} text="Редактировать"></ModifiedButton>
        </div>
        <div className="info-block">
            <Field readBull={readBull} value="user.id" text="Name"/>
            <Field readBull={readBull} text="User name" placeholder="Ivan"/>
            <Field readBull={readBull} text="E-mail" placeholder="example@mail.com"/>
            <Field readBull={readBull} text="Street" placeholder="ул. Пример"/>
            <Field readBull={readBull} text="City" placeholder="Москва"/>
            <Field readBull={readBull} text="Zip code" placeholder="1234234"/>
            <Field readBull={readBull}  text="Phone" placeholder="89991112233"/>
            <Field readBull={readBull} text="Website" placeholder="www.example.com"/>
            <Field req={false} readBull={readBull} text="Comment" placeholder=""/>
        </div>
            <SendButton text="Отправить"/>
        </div>
        </div>
      
        )
}

export default Profile