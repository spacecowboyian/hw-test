import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { css } from 'emotion/macro';

import { spacing, standardBox } from '../Styles';

const carrierInfo = css`
  ${standardBox}
  text-align: left;
  padding-bottom: 0;
`

const carrierInfoName = css`
  font-size: 46px;
  font-weight: 3100;
  color: #003D40;
`

const infoSummary = css`
  display: flex;
`

const infoSummaryTitle = css`
  margin-block-start: 1.33em;
  font-weight: 600;
`

const infoSummaryDescription = css`
  flex-grow: 1;
`

const infoSummaryDescriptionHeader = css`
  font-weight: 500;
  margin-bottom: calc(${spacing}*2)
`
const infoSummaryDescriptionBody = css`
  font-size: 13px;
`

export default function CarrierInfo({ carrier }) {
  const { carrierName, carrierWebsite, carrierWebsiteInfo } = carrier;
  return (
    <Row className={carrierInfo}>
      <Col md={12} lg={6}>
        <h1 className={carrierInfoName}>{carrierName}</h1>
        <dl className={infoSummary}>
          <dt className={infoSummaryTitle}>Website Summary</dt>
          <dd className={infoSummaryDescription}>
            <h4 className={infoSummaryDescriptionHeader}>{carrierWebsite}</h4>
            <p className={infoSummaryDescriptionBody}>
              {carrierWebsiteInfo}
            </p>
          </dd>
        </dl>
      </Col>
    </Row>
  )
}
