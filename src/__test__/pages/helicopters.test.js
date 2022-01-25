import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Helicopters from '../../pages/Helicopters';
import { Provider } from 'react-redux';
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