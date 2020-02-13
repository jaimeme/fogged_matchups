import React from "react";
import { championImage } from "../data/champions";
import { Row, Col, Collapse } from "antd";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
          <Collapse>
            <Panel header={props.champion} key="1">
              <div className="What-text">
                {props.text}
              </div>
            </Panel>
          </Collapse>

        </div>
      </Col>
    </div>
  );
}
