import React,{useState} from "react";
function Newnote(props)
{
    return (
        <div className="Note">
            <h1>{props.name}</h1>
            <p>{props.content}</p>
            <button onClick={()=>props.onDelete(props.name)}>Delete</button>
        </div>
    );

}
export default Newnote;