import React, { useState,useEffect } from 'react'
import NotesList from './components/NotesList'
import Header from './components/Header'
import Search from './components/Search'
import {nanoid} from 'nanoid';

const App = () => {

  const [notes,setNotes]=useState([]);
  const [searchText, setSearchText] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notePack-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notePack-data", JSON.stringify(notes));
  }, [notes]);
  

  //prop drilling - app->notelist->AddNewNote
  const addNote=(title,text)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      head: title,
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  //app->noteList
  const deleteNote=(id)=>{
    const newNote=notes.filter((note)=>note.id!==id);
    setNotes(newNote);
  }


  return (
    <div className="app">
    
      <div className={`${dark && `dark-mode`}`}>
      <Header handleDark={setDark}  />
      <br />
      <div className="container">
        <Search handleSearch={setSearchText} />

        {/**Filtering out  */}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
      </div>
    </div>
  
  )
}

export default App
