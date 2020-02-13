import React from "react";
import { championImage } from "../data/champions";
import { Row, Col } from "antd";
export default function ChampionCollapse(props) {
  return (
    <div>
      <Col span={2} style={{ margin: "30px" }}>
        <img
          src={championImage(
            props.champion.toLowerCase().replace(/[\s'.]/g, "")
          )}
        />
        <div style={{ textAlign: "justify", whiteSpace: "nowrap" }}>
          {props.champion}
        </div>
      </Col>
    </div>
  );
}
