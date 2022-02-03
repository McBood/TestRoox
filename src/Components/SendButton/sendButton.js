import React from "react"

import "./sendButton.scss"

const SendButton = ({text,button}) => {
    return (
        <button className="sendBut" onClick={() => button()}>{text}</button>
    )

}

export default SendButton