import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { css } from 'emotion/macro';

import { standardBox } from '../Styles';

const carrierInfo = css`
  ${standardBox};
  color: #515A5A;
  text-align: left;
  padding-bottom: 0;
`

const carrierInfoName = css`
  font-size: 46px;
  font-weight: 300;
  color: #003D40;
`

const infoSummary = css`
  display: flex;
`

const infoSummaryTitle = css`
  margin-block-start: 1.33em;
  font-size: 16px;
  font-weight: 500;
`

const infoSummaryDescription = css`
  flex-grow: 1;
`

const infoSummaryDescriptionHeader = css`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0
`
const infoSummaryDescriptionBody = css`
  font-size: 14px;
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
