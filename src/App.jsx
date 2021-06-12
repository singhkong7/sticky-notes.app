import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Newnote from "./newnote";
import "./App.css"

function App() 
{
  const[notes,setNotes]=useState([])
  function Addnote(newNote)
  {
    console.log(newNote); 
    setNotes(prevNotes =>{
      return[...prevNotes,newNote]
    });
  }
  function Deletenote(name)
  {
    setNotes(prevNotes =>{
      return prevNotes.filter((notesItem)=>{
        return notesItem.name!== name;
      });
    });
  }
  return (
    <div className="App">
      <Header />
      <Note onadd={Addnote} />
      {notes.map((noteItem,index)=>{
        return (
          <Newnote 
            name={noteItem.name}
            content={noteItem.content}
            onDelete={Deletenote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
