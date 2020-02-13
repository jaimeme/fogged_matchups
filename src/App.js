import React from "react";
import fogged from "./data/fogged.json";
import { Row, Col } from "antd";
import "./App.css";
import { championImage } from "./data/champions";
const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function App() {
  return (
    <div className="App">
      <Row type="flex" justify="center" align="top">
        {fogged.map(value => (
          <div>
            <Col span={6}>
              <img
                src={championImage(
                  value.champion.toLowerCase().replace(/[\s'.]/g, "")
                )}
              />
              {value.champion}
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default App;
