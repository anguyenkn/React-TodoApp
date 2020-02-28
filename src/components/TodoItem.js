import React from "react"

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" name={props.info.name} value={props.info.name} />
            <label name={props.info.name}> {props.info.task}</label><br />
        </div>
    );
}

export default TodoItem