import React from "react"

import "./sortButton.scss"

const SortButton = ({text,button}) => <button onClick={() => button()}  className="sortButton">{text}</button>



export default SortButton;