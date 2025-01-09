import "./App.css"
import { useState } from "react"

type Note = {
  id: number;
  title: string;
  content: string;
}

const App = () => {
  
  const [notes, setNotes] = useState<Note[]> ([
    {
    id: 1,
    title: "note title",
    content: "content"
    },
    {
    id: 2,
    title: "note title",
    content: "content"
    },
    {
    id: 3,
    title: "note title",
    content: "content"
    },
    {
    id: 4,
    title: "note title",
    content: "content"
    },
    {
    id: 5,
    title: "note title",
    content: "content"
    },
    {
    id: 6,
    title: "note title",
    content: "content"
    },
  ])

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleNoteClick = (note:Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const handleUpdateNote = (event: React.FormEvent) => {
    event.preventDefault(); // prevents form submit on save

    if(!selectedNote){
      return;
    };

    const updatedNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content,
    };
// This will itterate through the notes array and check if it is equal to the existing note
    const updatedNoteList = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    )

    setNotes(updatedNoteList)
    setTitle("")
    setContent("")
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setTitle("")
    setContent("")
    setSelectedNote(null);
  };

  const deleteNote = (event: React.MouseEvent, noteId: Number) => {
    event.stopPropagation(); // this is because we have nested onClick events (so the select note doesnt run)
    
// This filters for all the notes not equal to the given note (filter also itereates through an array)
    const updatedNotes = notes.filter(
      (note) => note.id !== noteId
    )

    setNotes(updatedNotes)
  };



// This is the JSX
  return(
    <div className="app-container">
      <form 
        className="note-form"
        onSubmit={(event) => 
          selectedNote
          ? handleUpdateNote(event)
          : handleAddNote(event)
        }
      >

{/* This is the input field */}
        <input 
          value = {title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          placeholder="Title"
          required
        ></input>

        <textarea
          value = {content}
          onChange={(event) =>
            setContent(event.target.value)
          }
          placeholder="Content"
          rows={10}
          required
        ></textarea>

{/* Conditional logic for buttons depending on if there is a selected note */}
        {selectedNote ? (
          <div className="edit-buttons">
            <button className="save-button" type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Add Note</button>
        )}

{/* this is where the individual notes live */}
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
        <div 
          className="note-item"
          onClick={() => handleNoteClick(note)}
          >
          <div className="notes-header">
            <button onClick={(event) => deleteNote(event, note.id)}>x</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default App

