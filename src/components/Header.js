import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";

const Header = ({handleDark}) => {
  return (
    <div className="main-title">
      <h1>
        <img src="https://i.imgur.com/iXV2V0i.png" width="30" height="30"></img>{" "}
        NotePack
      </h1>
      <button
        onClick={() => handleDark((prevState) => !prevState)}
        className="toggle"
      >
        <MdLightbulbOutline />
        Mode
      </button>
    </div>
  )
}

export default Header
