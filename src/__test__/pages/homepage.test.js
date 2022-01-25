import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

it('Homepage renders correctly', () => {
  const tree = renderer
    .create(<Router>
                <Provider store={store}>
                    <Homepage />
                </Provider>
            </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});