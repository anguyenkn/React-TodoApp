import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="checkbox" name="box1" value="box1" />
      <label for="box1"> Learn HTML</label><br />
      <input type="checkbox" name="box2" value="box2" />
      <label for="box2"> Learn CSS</label><br />
      <input type="checkbox" name="box3" value="box3" />
      <label for="box3"> Learn JS</label><br />
    </div>
  );
}

export default App;
