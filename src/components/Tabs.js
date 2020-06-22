import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import { css } from 'emotion/macro';

import { spacing } from '../Styles';

const tabContainer = css`
  padding: 0 calc(${spacing}*8);
`

const tabs = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`
const tab = css`
  padding: calc(${spacing}*8) 0;
  margin-right: calc(${spacing}*10);
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  color: #003D40;
  border-bottom: ${spacing} solid transparent;
`
const tabActive = css`
  ${tab}
  color: #00E9CB; 
  border-bottom-color: #00E9CB; 
`

export default function Tabs() {
  return (
    <Row className={tabContainer}>
      <Col xs={12}>
        <ul className={tabs}>
          <li className={tabActive}>snapshot</li>
          <li className={tab}>trends</li>
        </ul>
      </Col>
    </Row>
  )
}
