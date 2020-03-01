import React from "react"

class TodoItem extends React.Component{
    render(){
        return(
            <div className="todo-item">
                <input onChange={() => console.log("Changed!")} type="checkbox" checked={this.props.info.completed}/>
                <label name={this.props.info.text}> {this.props.info.text}</label><br />
            </div>
        );
    }
}

export default TodoItem