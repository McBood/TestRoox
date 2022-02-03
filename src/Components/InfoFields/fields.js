import React from "react"

import "./fields.scss"

const Field = ({text,placeholder,readBull}) => {
    return (
        <div className="fieldBlock">
         <span className="subtitle">{text}</span>
         <input className="inpt" type="text" placeholder={placeholder} readOnly={readBull}></input>
         </div>
       
    )
}

export default Field


