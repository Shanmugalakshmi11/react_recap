// src/App.js
import React from "react";
import TodoList from "./TodoList";
import "./App.css"; // We'll add some basic styling here

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Todo List App</h1>
      <TodoList />
    </div>
  );
}

export default App;
