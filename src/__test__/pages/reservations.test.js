import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Reservations from '../../pages/Reservations';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

it('Reservation page renders correctly', () => {
  const tree = renderer
    .create(<Router>
                <Provider store={store}>
                    <Reservations />
                </Provider>
            </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});