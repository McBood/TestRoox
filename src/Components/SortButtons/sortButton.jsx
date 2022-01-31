import React from "react"
import styled from "styled-components"

import "./sortButton.scss"

const Button = styled.button`
  background: #4b51ef;
  padding: 5px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #fff;
  border: none;
  font-weight: 100;
  line-height: 14px;
  font-size: 12px;
  cursor: pointer;
`

const SortButton = ({text,button,className}) => {
    return (
        <Button className={className} onClick={() => button()} >{text}</Button>
    )
} 



export default SortButton;