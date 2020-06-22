import { css } from 'emotion/macro';

export const colorCyan = '#00FFDE';

export const colorSeries = [
  "#003D40",
  "#006667",
  "#008F91",
  "#00B0B2",
  "#00C7B1",
  "#00E9CB",
  "#2FA200",
  "#00CE5F",
  "#00E834",
  "#00FF39"
];

export const hiddenAboveMobile = css`
  @media(min-width: 600px) {
    display: none;
  }
`

export const spacing = '4px';

export const standardBox = css`
  padding:calc(${spacing}*4) calc(${spacing}*8);
`
