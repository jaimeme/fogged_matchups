import React from "react";
import fogged from "./data/fogged.json";
import "./App.css";
import { championImage } from "./data/champions";
const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
//console.log(championImage("aatrox"));
function fodac() {
  const array = fogged.reduce((atual, value) => {
    return (
      atual +
      `const ${value.champion
        .toLowerCase()
        .replace(/[\s'.]/g, "")} = require("../img/champion/${capitalize(
        value.champion.replace(/[\s'.]/g, "").toLowerCase()
      )}.png");`
    );
  }, "");
  console.log(array);
}
function App() {
  console.log(fogged);
  console.log(fodac());
  return (
    <div className="App">
      <li>
        {fogged.map(value => (
          <div>
            <ul>{value.champion}</ul>
            <img
              src={championImage(
                value.champion.toLowerCase().replace(/[\s'.]/g, "")
              )}
            />
          </div>
        ))}
      </li>
    </div>
  );
}

export default App;
