import React from "react"

class TodoItem extends React.Component{
    render(){
        const todoItemStyle = {}
        if (this.props.item.completed) {
            todoItemStyle["textDecoration"] = "line-through";
            todoItemStyle["color"] = "gray";
            todoItemStyle["fontStyle"] = "italic"
        }

        return(
            <div style={todoItemStyle} className="todo-item">
                <input 
                    onChange={() => this.props.handleChange(this.props.item.id)} 
                    type="checkbox" 
                    checked={this.props.item.completed}
                />
                <label name={this.props.item.text}> {this.props.item.text}</label><br />
            </div>
        );
    }
}

export default TodoItem