import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { css } from 'emotion/macro';

import './App.css';
import { spacing, standardBox, colorSeries, hiddenAboveMobile } from './Styles';
import Header from './components/Header/Header';
import CarrierInfo from './components/CarrierInfo/CarrierInfo';
import Tabs from './components/Tabs/Tabs';
import Toggles from './components/Toggles/Toggles';
import SnapshotDetails from './components/SnapshotDetails/SnapshotDetails';

const appStyle = css`
  color: #636B6B;
  font-size: 14px;
`

const appGrid = css`
  padding-left: 8px;
  padding-right: 8px;
`

const grayBox = css`
  ${standardBox}
  background: #EAEEEF;
  border-top: 1px solid #C5CED0;
  padding-bottom: calc(${spacing}*18);
  padding-top: calc(${spacing}*18);
`

const snapshotColumnTitle = css`
  color:#4A4A4A;
  font-size: 40px;
  font-weight: 300;
`

const snapshotColumnTitleHiddenAboveMobile = css`
  ${hiddenAboveMobile};
  ${snapshotColumnTitle};
`

const snapshotColumnData = css`
  padding: 0 0 0 20px;
`

const chartData = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100, 60, 85, 200],
    backgroundColor: colorSeries,
    borderWidth: 0
  },]
};

const userData = {
  initials: 'ES',
  name: 'Elwin Sharvill',
}

const carrierData = {
  carrierName: "Travelers",
  carrierWebsite: "www.travelers.com",
  carrierWebsiteInfo: "Travelers is the second largest writer of U.S. commercial property casualty insurance and the third largest writer of U.S. personal insurance through independent agents."
}

function App() {
  return (
    <div data-testid="appFrame" className={appStyle}>
      <Grid className={appGrid} fluid>
        <Header user={userData} />
        <CarrierInfo carrier={carrierData} />
        <Tabs />
        <Row className={grayBox}>
          <Col xs={12}>
            <Toggles />
            <Row>
              <Col className={snapshotColumnData} sm={12} md={6} lg={5}>
                <h2 className={snapshotColumnTitle}>Broker Book</h2>
                <SnapshotDetails data={chartData} />
              </Col>
              <Col className={snapshotColumnData} sm={12} md={6} lg={5} lgOffset={1}>
                <h2 className={snapshotColumnTitle}>Carrier Placement</h2>
                <SnapshotDetails data={chartData} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={grayBox}>
          <Col xs={12}>
            <Row>
              <Col className={snapshotColumnData} sm={12} md={6} lg={5}>
                <h2 className={snapshotColumnTitleHiddenAboveMobile}>Broker Book</h2>
                <SnapshotDetails data={chartData} />
              </Col>
              <Col className={snapshotColumnData} sm={12} md={6} lg={5} lgOffset={1}>
                <h2 className={snapshotColumnTitleHiddenAboveMobile}>Carrier Placement</h2>
                <SnapshotDetails data={chartData} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
