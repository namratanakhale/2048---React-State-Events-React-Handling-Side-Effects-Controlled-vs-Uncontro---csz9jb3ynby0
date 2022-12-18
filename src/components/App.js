import React from 'react'
import '../styles/App.css';
import Board from './Board'
const App = () => {

  return (
    <div id="main">
      <h1>2048</h1>
      <Board GridSize={5} />
    </div>
  )
}


export default App;
