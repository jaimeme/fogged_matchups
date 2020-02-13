import React from "react";
import { championImage } from "../data/champions";
import { Row, Col, Collapse } from "antd";
const { Panel } = Collapse;


export default function ChampionCollapse(props) {
  return (
    <div className="Box-champions">
      <Col span={24}>
        <img
          src={championImage(
            props.champion.toLowerCase().replace(/[\s'.]/g, "")
          )}
        />
        <div className="Champion-text" >
          <Collapse className={switchColor(props.difficulty)}>
            <Panel header={props.champion} key="1">
              <div className="What-text">
                {props.text}
              </div>
            </Panel>
          </Collapse>

        </div>
      </Col>
    </div >
  );
}

function switchColor(difficulty) {
  switch (difficulty) {
    case "Easy":

      return "Easy-matchup";
    case "Medium":

      return "Medium-matchup";
    case "Hard":

      return "Hard-matchup";
    default:

      return "Trolling-matchup";
  }
}