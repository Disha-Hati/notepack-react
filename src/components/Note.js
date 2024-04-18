import React from 'react'
import {
    FcFullTrash,
    FcEditImage,
    FcLike,
    FcCandleSticks
  } from "react-icons/fc";


const Note = ({id, head, text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
      <h2>{head}</h2>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <FcCandleSticks className="color-icon" size="1.2em" />
        <FcLike className="love-icon" size="1.2em" />
        <FcEditImage className="edit-icon" size="1.2em" />

        <FcFullTrash
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.2em"
        />
      </div>
    </div>
  )
}

export default Note
