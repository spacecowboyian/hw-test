import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import CarrierInfo from './CarrierInfo';

afterEach(cleanup);

it('renders correctly', () => {
  const tree = renderer
    .create(<CarrierInfo carrier={{
      carrierName: 'Test Carrier',
      carrierWebsite: 'www.testcarrier.com',
      carrierWebsiteInfo: 'Boy oh boy is there ever info'
    }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
