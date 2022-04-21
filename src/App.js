import './App.css';
import Header from './Components/Header';
import CreateArea from './Components/CreateArea';
import { useState } from 'react';
import Note from './Components/Note';
import Footer from './Components/Footer';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((previous) => {
      return [ ...previous, newNote ]
    });
  }

  function deleteNote(id) {
    setNotes((previous) => {
      return previous.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      { notes.map((note, index) => {
        return (
          <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
