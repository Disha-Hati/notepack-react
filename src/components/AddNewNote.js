import React, { useState } from 'react'
import { FcOk, FcLike } from "react-icons/fc";

const AddNewNote = ({ handleAddNote}) => {
    const[noteText,setNoteText]=useState("");
    const[titleText,setTitleText]=useState("");
    const charCount=300
  
    const textChanger=(event)=>{
        if (charCount - event.target.value.length >= 0)
        setNoteText(event.target.value);
    }

    function saveHandler() {
      if (noteText.trim().length > 0) {
        handleAddNote(titleText, noteText);
        setTitleText("");
        setNoteText("");
      }
    }
  

    
  return (
    <div className='note new'>
    <div className="note-header">
        {" "}
        <textarea
          className="title-textArea"
          placeholder="Title.."
          value={titleText}
          onChange={(event)=>setTitleText(event.target.value)}
        ></textarea>
      </div>

      <textarea
        rows="5"
        cols="10"
        placeholder="Type your Note here.."
        value={noteText}
        onChange={textChanger}
      ></textarea>

<div className="note-footer">
        <small>{charCount - noteText.length} remaining</small>
        <button className="btn-fav">
          <FcLike className="love-icon" size="1.2em" />
          Fav
        </button>
        <button className="btn-save" onClick={saveHandler}>
          <FcOk size="1em" /> Save
        </button>
      </div>
      
    </div>
  )
}

export default AddNewNote
