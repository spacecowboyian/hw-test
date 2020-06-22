import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Avatar from './Avatar';

afterEach(cleanup);

it('renders correctly', () => {
  const tree = renderer
    .create(<Avatar initials="IJ" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
