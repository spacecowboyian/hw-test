import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Header from './Header';

afterEach(cleanup);

const userData = {
  initials: 'ES',
  name: 'Elwin Sharvill',
}

it('renders correctly', () => {
  const tree = renderer
    .create(<Header user={userData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
