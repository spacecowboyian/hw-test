import React from 'react';
import { css } from 'emotion/macro';

import { colorCyan, spacing } from '../Styles';

const avatarCircle = css`
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorCyan};
  width: 44px;
  height: 44px;
  border-radius: 44px;
  text-align: center;
  margin-right: calc(${spacing}*4);
`;

const avatarInitials = css`
  color: #006667;
  font-size: 18px;
  margin-top:-3px;
  margin-left:-2px;
`;

export default function Avatar(initials) {
  return (
    <div className={avatarCircle}><div className={avatarInitials}>{initials}</div></div>
  )
}
