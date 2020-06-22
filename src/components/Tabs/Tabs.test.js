import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Tabs from './Tabs';

afterEach(cleanup);


it('renders correctly', () => {
  const tree = renderer
    .create(<Tabs />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
