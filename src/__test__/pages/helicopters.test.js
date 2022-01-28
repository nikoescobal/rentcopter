import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helicopters from '../../pages/Helicopters';
import store from '../../redux/configureStore';

it('Helicopters page renders correctly', () => {
  const tree = renderer
    .create(<Router>
      <Provider store={store}>
        <Helicopters />
      </Provider>
            </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
