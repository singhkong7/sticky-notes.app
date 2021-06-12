import React, { useState } from "react";
import "./Note.css";
function Note(props) {
  const [note, setNote] = useState({
    name: " ",
    content: " ",
  });
  const [arrays, setArrays] = useState([]);

  function handle(event) {
    const { value, name } = event.target;
    setNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  // function Click()
  // {

  //       setArrays(prevArrays =>{
  //           return [...prevArrays,note]
  //       });
  // }

  return (
    <>
    <div className="Note">
    <input type="text" name="name" onChange={handle} value={note.name} />
      <input
        type="text"
        name="content"
        onChange={handle}
        value={note.content}
      />
      <button
        onClick={() => {
          props.onadd(note);
          setNote({
            name: "",
            content: "",
          });
        }}
      >
        <span>ADD</span>
      </button>
    </div>
    </>
  );
}

export default Note;
