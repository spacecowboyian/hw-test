import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import { colorSeries } from '../../Styles';
import SnapshotDetails from './SnapshotDetails';

afterEach(cleanup);

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

it('renders correctly', () => {
  const tree = renderer
    .create(<SnapshotDetails data={chartData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
