import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import AddHelicopter from '../../pages/AddHelicopter';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

it('Add helicopter page renders correctly', () => {
  const tree = renderer
    .create(<Router>
        <Provider store={store}>
            <AddHelicopter />
        </Provider>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});