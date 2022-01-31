import React from "react"

import "./fields.scss"

const Field = ({text,placeholder}) => {
    return (
        <div className="fieldBlock">
         <span className="subtitle">{text}</span>
         <input className="inp" type="text" placeholder={placeholder}></input>
         </div>
       
    )
}

export default Field


