import { useState } from "react";

function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const [finished,setFinisheed] =useState(isFinished);
    const[isEditting,setIsEditting]=useState(false);
    const [editText,setEditText]=useState(todoData);
return(
    <div>
    <input type="checkbox" checked ={finished} onChange={(e) =>{
     setFinisheed(e.target.checked);
     changeFinished(e.target.checked)
     }}/>
       {(isEditting) ? <input type="text"  value={editText} onChange={e => setEditText(e.target.value)}/>: <span>{todoData}</span>}
        <button onClick={() =>{
            setIsEditting(!isEditting);
            onEdit(editText);

        }}>{(!isEditting) ? 'Edit' : 'Save'}</button>
        <button onClick={onDelete}>Delete</button>
    </div>
)
}
export default Todo;