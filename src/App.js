import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos : todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const items_rendered = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} item={item}/>);
    return (
      <div className="todo-list">
        {items_rendered}
      </div>
    )
  }
}

export default App;
