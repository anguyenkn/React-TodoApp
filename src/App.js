import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./components/TodoItem"
import inputData from "./todosData"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data : inputData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    alert("Clicked", id)
  }

  render(){
    const items_rendered = this.state.data.map(item => <TodoItem handleChange={this.handleChange} key={item.id} info={item}/>);
    return (
      <div className="todo-list">
        {items_rendered}
      </div>
    )
  }
}

export default App;
