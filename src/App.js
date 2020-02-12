import React from "react";
import fogged from "./data/fogged.json";
import "./App.css";

function App() {
  console.log(fogged);
  return (
    <div className="App">
      <li>
        {fogged.map(value => (
          <ul>{value.champion}</ul>
        ))}
      </li>
    </div>
  );
}

export default App;
