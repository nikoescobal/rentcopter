import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReservationCard from '../../components/ReservationCard';
import reservation from '../mockReservation';
import store from '../../redux/configureStore';

it('Helicopter modal component renders correctly', () => {
  const tree = renderer
    .create(<Router>
      <Provider store={store}>
        <ReservationCard reservation={reservation} />
      </Provider>
            </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
