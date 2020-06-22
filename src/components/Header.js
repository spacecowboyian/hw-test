import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { css } from 'emotion/macro';
import { FiBell, FiArrowLeft } from "react-icons/fi";

import { colorCyan, spacing, standardBox } from '../Styles';
import Avatar from './Avatar';

const header = css`
 ${standardBox}
 text-align: left;
`;

const headerBackButton = css`
  display: flex;
  align-items: center;
  padding-left: 0px;
`;

const headerEmployeeInfo = css`
  display:flex;
  justify-content: flex-end;
  align-items: center;
`;

const headerEmployeeInfoName = css`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: #006667;
  margin-right: calc(${spacing}*4);
`;

const iconLeftArrow = css`
  font-size: 2.2em;
  color: ${colorCyan};
`;

const iconNotificationBell = css`
  color: ${colorCyan};
  font-size: 2em;
`;

export default function Header({ user }) {
  const {
    initials,
    name
  } = user;
  return (
    <Row className={header}>
      <Col className={headerBackButton} xs={1}><FiArrowLeft className={iconLeftArrow} /></Col>
      <Col xs={11} className={headerEmployeeInfo}>
        <div className={headerEmployeeInfoName}>{name}</div>
        {Avatar(initials)}
        <FiBell className={iconNotificationBell} />
      </Col>
    </Row>
  )
}
