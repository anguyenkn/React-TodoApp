import React from "react"

class TodoItem extends React.Component{
    render(){
        const todoItemStyle = {
            textDecoration: "line-through",
            color: "gray",
            fontStyle: "italic"
        }

        return(
            <div className="todo-item">
                <input 
                    onChange={() => this.props.handleChange(this.props.item.id)} 
                    type="checkbox" 
                    checked={this.props.item.completed}
                />
                <label style={this.props.item.completed ? todoItemStyle :null} name={this.props.item.text}> {this.props.item.text}</label><br />
            </div>
        );
    }
}

export default TodoItem