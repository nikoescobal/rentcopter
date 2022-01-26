import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Drawer from '../../components/Drawer';

it('Drawer component renders correctly', () => {
  const tree = renderer
    .create(<Router><Drawer /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
