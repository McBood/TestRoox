import React from "react"

import "./UserBlock.scss"

const UserBlock = ({name,city,company}) => {
    return (
        <div className="userBlock">
        <div className="userBlock__info">   
        <div><strong>ФИО: </strong>{name}</div>
          <div><strong>Город:</strong> {city}</div>
          <div><strong>Компания:</strong> {company}</div>
            <button>Подробнее</button>
            </div>
        </div>
    )
        
}


export default UserBlock