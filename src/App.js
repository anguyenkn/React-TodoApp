import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./components/TodoItem"
import data from "./todosData"

function App() {
  const items_rendered = data.map(item => <TodoItem key={item.id} info={item}/>);

  return (
    <div className="todo-list">
      {items_rendered}
    </div>
  );
}

export default App;
