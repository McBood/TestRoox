import React from "react"
import { Link, NavLink } from 'react-router-dom'
import "./UserBlock.scss"

const UserBlock = ({name,city,company, user}) => {
    return (
        <div className="userBlock">
        <div className="userBlock__info">   
        <div><strong>ФИО: </strong>{name}</div>
          <div><strong>Город:</strong> {city}</div>
          <div><strong>Компания:</strong> {company}</div>
          <NavLink to={"/profile/" + user}>
            <button><Link className="butAct" to="/Profile">Подробнее</Link></button>
            </NavLink>
            </div>
        </div>
    )
        
}


export default UserBlock