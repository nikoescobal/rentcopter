import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../../pages/Register';

it('Registration page renders correctly', () => {
  const tree = renderer
    .create(<Router><Register /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
