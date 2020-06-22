import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import { css } from 'emotion/macro';
import { FiSliders } from "react-icons/fi";

import { spacing } from '../../Styles';

//TODO: snapshots prop should accept snapshots array

const iconSliders = css`
  font-size: 2.2em;
  color: #00E0C2;
`

const toggles = css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`

const toggle = css`
  color: #A6AEAE;
  border: 1px solid #979797;
  padding: calc(${spacing}*3) calc(${spacing}*5);
  margin-right: calc(${spacing}*2);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
`
const toggleActive = css`
  ${toggle}
  border-color: #00E0C2;
  background-color: #00E0C2;
  color: #007371;
`

const toggleSlider = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export default function Toggles() {
  return (

    <Row>
      <Col xs={12} sm={11}>
        <ul className={toggles}>
          <li className={toggleActive}>Premium Range</li>
          <li className={toggle}>Markets</li>
          <li className={toggleActive}>Industries</li>
          <li className={toggle}>Products</li>
        </ul>
      </Col>
      <Col className={toggleSlider} xs={12} sm={1}>
        <FiSliders className={iconSliders} />
      </Col>
    </Row>

  )
}
