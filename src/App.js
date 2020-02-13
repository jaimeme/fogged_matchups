import React from "react";
import fogged from "./data/fogged.json";
import { Row, Col } from "antd";
import "./App.css";
import { championImage } from "./data/champions";
import ChampionCollapse from "./components/ChampionCollapse";
const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Row type="flex" justify="space-around">
            {fogged.map(value => (
              <ChampionCollapse champion={value.champion} />
            ))}
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
}

export default App;
