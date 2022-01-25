import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import LogIn from '../../pages/LogIn';

it('Login page renders correctly', () => {
  const tree = renderer
    .create(<Router><LogIn /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});