import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./components/TodoItem"

function App() {
  return (
    <div className="todo-list">
      <TodoItem info={{name:"box1", task:"Learn HTML"}}/>
      <TodoItem info={{name:"box2", task:"Learn CSS"}}/>
      <TodoItem info={{name:"box3", task:"Learn JS"}}/>
    </div>
  );
}

export default App;
