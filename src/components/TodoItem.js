import React from "react"

function TodoItem(props){
    let checkbox_render = props.info.completed == true ? 
    <input type="checkbox"/> : <input type="checkbox" checked="checked"/>

    return(
        <div className="todo-item">
            {checkbox_render}
            <label name={props.info.text}> {props.info.text}</label><br />
        </div>
    );
}

export default TodoItem