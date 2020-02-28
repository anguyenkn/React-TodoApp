import React from "react"

class TodoItem extends React.Component{
    render(){
        let checkbox_render = this.props.info.completed == true ? 
        <input type="checkbox"/> : <input type="checkbox" checked="checked"/>

        return(
            <div className="todo-item">
                {checkbox_render}
                <label name={this.props.info.text}> {this.props.info.text}</label><br />
            </div>
        );
    }
}

export default TodoItem