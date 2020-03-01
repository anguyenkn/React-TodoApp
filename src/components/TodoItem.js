import React from "react"

class TodoItem extends React.Component{
    render(){
        return(
            <div className="todo-item">
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