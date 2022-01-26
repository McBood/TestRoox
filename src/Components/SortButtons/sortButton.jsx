import React from "react"

import "./sortButton.scss"

const SortButton = ({text,onclick}) => <button onClick={onclick} className="sortButton">{text}</button>



export default SortButton;