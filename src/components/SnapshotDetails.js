import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import { css } from 'emotion/macro';
import { Doughnut } from 'react-chartjs-2';

import { spacing, colorSeries } from '../Styles';

const snapshotTitle = css`
  font-size: 30px;
  font-weight: 100;
`

const keyList = css`
  margin:0;
`

const keyItem = css`
  padding-bottom: calc(${spacing}*3)
`;

const keyDotBase = css`
  display: inline-block;
  width: 8px;
  height: 8px;
  overflow: hidden;
  border-radius: 8px;
  background-color: black;
`

const keyDotContent = css`
  display: block;
  margin-top:100px;
`

const keyDot = color => css`
  ${keyDotBase}
  background-color: ${colorSeries[color]}
`

const keyDescription = css`
  display: inline-block;
  margin-left: calc(${spacing}*3);
`

const chartColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #515A5A;
`

const chartContainer = css`
  position:relative;
`

const chartPercentage = css`
 position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size:40px;
  font-weight: 100;
`

const chartTotal = css`
  font-size: 24px;
  font-weight: 600;
  margin-top: calc(${spacing}*8);
`

const chartTotalLabel = css`
  font-weight: 600;
  margin-top: calc(${spacing}*2);
`

const chartOptions = {
  cutoutPercentage: 80,
}

export default function SnapshotDetails({ data }) {
  return (
    <React.Fragment>
      <h3 className={snapshotTitle}>Premium Range</h3>
      <Row>
        <Col xs={6}>
          <dl className={keyList}>
            <div className={keyItem}>
              <dt className={keyDot(0)}>
                <span className={keyDotContent}>Range 1</span>
              </dt>
              <dd className={keyDescription}>
                $0 - $5000
                        </dd>
            </div>
            <div className={keyItem}>
              <dt className={keyDot(2)}>
                <span className={keyDotContent}>Range 2</span>
              </dt>
              <dd className={keyDescription}>
                $5000 - $10,000
                        </dd>
            </div>

          </dl>
        </Col>
        <Col className={chartColumn} xs={6}>
          <div className={chartContainer}>
            <Doughnut data={data} legend={null} height={170} options={chartOptions} />
            <div className={chartPercentage}>95%</div>
          </div>
          <div className={chartTotal}>$1,548,990</div>
          <div className={chartTotalLabel}>Total Premiums</div>
        </Col>
      </Row>
    </React.Fragment>
  )
}
