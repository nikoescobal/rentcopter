import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import HeliReserve from '../../components/HeliReserve';
import helicopter from '../mockHeli';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';


it('Helicopter modal component renders correctly', () => {
  const tree = renderer
    .create(<Router>
        <Provider store={store}>
            <HeliReserve helicopter={helicopter} />
        </Provider>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});