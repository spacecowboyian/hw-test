import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Toggles from './Toggles';

afterEach(cleanup);


it('renders correctly', () => {
  const tree = renderer
    .create(<Toggles />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
