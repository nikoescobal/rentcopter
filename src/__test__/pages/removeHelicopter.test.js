import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import RemoveHelicopter from '../../pages/RemoveHelicopter';
import store from '../../redux/configureStore';

it('Remove helicopter page renders correctly', () => {
  const tree = renderer
    .create(<Router>
      <Provider store={store}>
        <RemoveHelicopter />
      </Provider>
            </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
