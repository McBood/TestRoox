import React from "react"
import { Link } from 'react-router-dom'
import "./UserBlock.scss"

const UserBlock = ({name,city,company}) => {
    return (
        <div className="userBlock">
        <div className="userBlock__info">   
        <div><strong>ФИО: </strong>{name}</div>
          <div><strong>Город:</strong> {city}</div>
          <div><strong>Компания:</strong> {company}</div>
            <button><Link to="/Profile">Подробнее</Link></button>
            </div>
        </div>
    )
        
}


export default UserBlock