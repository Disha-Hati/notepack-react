import React from 'react'
import Note from './Note'
import AddNewNote from './AddNewNote'

const NotesList = ({notes, handleAddNote,handleDeleteNote}) => {
  return (
    <div>
    <div>
      <AddNewNote handleAddNote={handleAddNote} />
    </div>

    <h1>Liked Notes</h1>
    <div className="fav-list"></div>
    <h1>Saved Notes</h1>
    <div className="note-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          head={note.head}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  </div>
  )
}

export default NotesList
