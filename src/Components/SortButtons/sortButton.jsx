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
  text-decoration: none;
`

const SortButton = ({text,button,className, dis}) => {
    return (
        <Button disabled={dis} className={className} onClick={() => button()} >{text}</Button>
    )
} 



export default SortButton;