import React from 'react'

function TodoItem(props){ 
    return(
        <div className="checkbox1">
        <input onChange={()=>console.log("checked")} type = "checkbox" id="checkbox2" checked={props.item.completed}/>
        <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem